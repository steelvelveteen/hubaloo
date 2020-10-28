import React from 'react';
import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosError, AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import * as AuthService from '../../services/auth.service';
import FormStyles from '../../styles/formStyles';
import { CredentialsType } from '../../types/Types';

const signUpPromptText = "Don't have an account?";
const passwordResetPromptText = "Forgot your password?";

const useStyles = FormStyles;

let validationErrorMsg: string[] = [];

type LoginProps = {
    toggleMode: () => void;
    togglePasswordResetMode?: () => void;
}

type LoginFailureType = {
    hasFailed: boolean,
    message: string[],
}

const LoginForm: React.FC<LoginProps> = (loginProps: LoginProps) => {
    const classes = useStyles();

    const [credentials, setLoginCredentials] = React.useState<CredentialsType>({ email: '', password: '' });
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);

    const [loginSuccess, setLoginSuccess] = React.useState<boolean>(false);
    const [loginFailure, setLoginFailure] = React.useState<LoginFailureType>({ hasFailed: false, message: [''] });

    const resetScreen = (): void => {
        setLoginFailure({ hasFailed: false, message: [''] });
        setValidationFailed(false);
    }

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setLoginCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setLoginCredentials({ ...credentials, password: event.currentTarget.value });
    };

    type LoginResponseType = {
        message: string,
        user_id: string,
        email: string,
        token: string
    };

    const loginSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        AuthService.Login(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
                finalize(() => setLoadingSpinner(false))
            )
            .subscribe(
                // Store token and user id, email localStorage
                // (response: { token: string, email: string }) => {
                (response: LoginResponseType) => {
                    console.log(response);
                    localStorage.setItem('token', response.token);
                    setLoginSuccess(true);
                },
                (error: AxiosError) => {
                    setLoginFailure({
                        hasFailed: true,
                        message: error?.response?.data.message
                    });
                }
            )
    }

    const submit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        if (AuthService.validateEmail(credentials.email) === null) {
            validationErrorMsg = [];
            validationErrorMsg = [...validationErrorMsg, "Please enter a valid email"];
            setValidationFailed(true);
            return;
        }
        if (!AuthService.validatePassword(credentials.password)) {
            validationErrorMsg = [];
            validationErrorMsg = [...validationErrorMsg, "You must provide your password for logging in"];
            setValidationFailed(true);
            return;
        }
        setLoadingSpinner(true);
        loginSubmit(event);
    }

    if (loginSuccess) {
        return (<Redirect to="/mainboard/home" />);
    }

    return (
        <>
            <form autoComplete="off" className={classes.form} id="form-submit"
                onSubmit={submit}>
                <input className={classes.inputFields}
                    onChange={setEmail}
                    placeholder="Email"
                    type="text"
                    value={credentials?.email} />
                <input className={classes.inputFields}
                    onChange={setPassword}
                    placeholder="Password"
                    type="password"
                    value={credentials?.password}
                />
            </form>
            { loadingSpinner
                ? <CircularProgress className={classes.spinner} />
                : <button className={classes.btn}
                    form="form-submit"
                    type="submit">
                    Login
                </button>
            }
            <div className={classes.errorMsgContainer}>
                <div className={classes.errorMessage}>
                    {loginFailure.hasFailed
                        && (loginFailure.message
                            .map((msg: string) => <p key={msg.length}>** {msg}</p>))
                    }
                    {validationFailed && (
                        validationErrorMsg
                            .map((msg: string) => <p key={msg.length}>** {msg}</p>)
                    )}
                </div>
            </div>
            <div className={classes.promptContainer}>
                <div className={classes.promptUnit}>
                    <span>{signUpPromptText}</span>
                    <button className={classes.btnAlternative}
                        onClick={loginProps.toggleMode}
                        type="button">
                        Sign Up
                    </button>
                </div>
                <div className={classes.promptUnit}>
                    <span>{passwordResetPromptText}</span>
                    <button className={classes.btnAlternative}
                        onClick={loginProps.togglePasswordResetMode}
                        type="button">
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
