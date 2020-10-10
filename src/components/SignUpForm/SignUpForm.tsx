import React from 'react';
// import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import { Signup } from '../../services/login-signup.service';
import { CredentialsType } from '../../types/Types';
import loginFormStyle from '../LoginForm/loginFormStyle';

const loginPromptText = "Already have an account?";

const useStyles = loginFormStyle;

let validationErrorMsg: string[] = [];

type SignUpProps = {
    toggleMode: () => void;
}

type SignUpCredentials = {
    credentials: CredentialsType,
    confirmPassword: string
}

const SignUpForm: React.FC<SignUpProps> = (signUpProps: SignUpProps) => {
    const classes = useStyles();
    const confirmPasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const [credentials, setLoginCredentials] = React.useState<CredentialsType>({ email: '', password: '' });
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);
    const [passwordMismatch, setPasswordMismatch] = React.useState<boolean>(false);
    // If signup successfull redirect to complete user info form
    // const [signupSucessfull, setSignupSuccessfull] = React.useState<boolean>(false);

    const resetScreen = (): void => {
        setValidationFailed(false);
        setPasswordMismatch(false);
    }

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setLoginCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setLoginCredentials({ ...credentials, password: event.currentTarget.value });
    };

    const signupSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        validationErrorMsg = [];
        event.preventDefault();
        Signup(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
                finalize(() => setLoadingSpinner(false))
            )
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (error: any) => {
                    if (error.response.status === 422) {
                        error.response.data.error.forEach((err: any) => {
                            validationErrorMsg.push(err.msg);
                        });
                    } else if (error.response.status === 409) {
                        validationErrorMsg.push(error.response.data.message);
                    }
                    setValidationFailed(true);
                }
            );
    }

    const submit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        if (confirmPasswordRef?.current?.value === credentials.password) {
            setLoadingSpinner(true);
            return signupSubmit(event);
        }
        setPasswordMismatch(true);
    }

    // If signup successfull redirect to complete user info form
    // if (signUpSuccessfull) {
    //     return (<Redirect to="/mainboard/home" />);
    // }

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
                <input className={classes.inputFields}
                    onChange={resetScreen}
                    placeholder="Confirm Password"
                    ref={confirmPasswordRef}
                    type="password"
                // value={credentials?.password}
                />
            </form>
            { loadingSpinner
                ? <CircularProgress className={classes.spinner} />
                : <button className={classes.btn}
                    form="form-submit"
                    type="submit">
                    Sign Up
                </button>
            }
            <div className={classes.errorMsgContainer}>
                <div className={classes.errorMessage}>
                    {validationFailed && (
                        validationErrorMsg
                            .map((msg: string) => <p key={msg.length}>** {msg}</p>)
                    )}
                    {passwordMismatch && <p>***Passwords do not match</p>}
                </div>
            </div>
            <div className={classes.prompt}>
                {loginPromptText}
                <button className={classes.btnAlternative}
                    onClick={signUpProps.toggleMode}
                    type="button">
                    Login
                </button>
            </div>
        </>
    );
};

export default SignUpForm;
