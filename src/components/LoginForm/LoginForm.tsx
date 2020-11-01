import React from 'react';
import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosError, AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import * as AuthService from '../../services/auth.service';
import FormStyles from '../../styles/formStyles';
import { CredentialsType } from '../../types/Types';
import PromptUnit from '../PromptUnit/PrompUnit';

const signUpPromptText = "Don't have an account?";
const passwordResetPromptText = "Forgot your password?";
const generalErrorMessage = "Something went wrong. Please try again later";
const invalidEmailMsg = "Please enter a valid email";
const invalidPasswordMsg = "You must provide your password for logging in";

const useStyles = FormStyles;

let validationErrorMsg = '';

type LoginProps = {
    togglePasswordResetMode: () => void;
    toggleSignUpMode: () => void;
}

type LoginFailureType = {
    hasFailed: boolean,
    message: string,
}

const LoginForm: React.FC<LoginProps> = (loginProps: LoginProps) => {
    const classes = useStyles();

    const [credentials, setLoginCredentials] = React.useState<CredentialsType>({ email: '', password: '' });
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);

    const [loginSuccess, setLoginSuccess] = React.useState<boolean>(false);
    const [loginFailure, setLoginFailure] = React.useState<LoginFailureType>({ hasFailed: false, message: '' });

    const resetScreen = (): void => {
        setLoginFailure({ hasFailed: false, message: '' });
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
                    localStorage.setItem('token', JSON.stringify(response.token));
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
            validationErrorMsg = invalidEmailMsg;
            setValidationFailed(true);
            return;
        }
        if (!AuthService.validatePassword(credentials.password)) {
            validationErrorMsg = invalidPasswordMsg;
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
                            ? <p>{loginFailure.message}</p>
                            : <p>{generalErrorMessage}</p>)
                    }
                    {validationFailed && (validationErrorMsg
                        ? <p>{validationErrorMsg}</p>
                        : <p>{generalErrorMessage}</p>)
                    }
                </div>
            </div>
            <div className={classes.promptContainer}>
                <PromptUnit
                    btnText="Sign Up"
                    promptText={signUpPromptText}
                    toggle={loginProps.toggleSignUpMode} />
                <PromptUnit
                    btnText="Reset"
                    promptText={passwordResetPromptText}
                    toggle={loginProps.togglePasswordResetMode} />
            </div>
        </>
    );
};

export default LoginForm;
