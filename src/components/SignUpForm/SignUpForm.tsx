import React from 'react';
// import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosError, AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import * as AuthService from '../../services/auth.service';
import FormStyles from '../../styles/formStyles';
import { CredentialsType } from '../../types/Types';

const loginPromptText = "Already have an account?";
const generalErrorMessage = "Something went wrong. Please try again later";
const invalidEmailMsg = "Please enter a valid email";
const invalidPasswordMsg = "You must provide your password for logging in";
const passwordMismatchMsg = "***Passwords do not match";

const useStyles = FormStyles;

let validationErrorMsg = '';

type SignUpProps = {
    toggleMode: () => void;
}

const SignUpForm: React.FC<SignUpProps> = (signUpProps: SignUpProps) => {
    const classes = useStyles();
    const confirmPasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const [credentials, setSignUpCredentials] = React.useState<CredentialsType>({ email: '', password: '' });
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);
    const [passwordMismatch, setPasswordMismatch] = React.useState<boolean>(false);
    // If signup successfull redirect to complete user info form
    // const [signupSucessfull, setSignupSuccessfull] = React.useState<boolean>(false);

    const resetScreen = (): void => {
        setValidationFailed(false);
        setPasswordMismatch(false);
    }

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setSignUpCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setSignUpCredentials({ ...credentials, password: event.currentTarget.value });
    };

    const signupSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        AuthService.SignUp(credentials)
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
                (error: AxiosError) => {
                    validationErrorMsg = error?.response?.data.message;
                    setValidationFailed(true);
                }
            );
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
        if (confirmPasswordRef?.current?.value !== credentials.password) {
            setPasswordMismatch(true);
            return;
        }
        setLoadingSpinner(true);
        signupSubmit(event);
    }

    // If signup successfull redirect to complete user info form
    // if (signUpSuccessfull) {
    //     return (<Redirect to="/msomeregistratinform view />);
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
                    {validationFailed && (validationErrorMsg
                        ? <p>{validationErrorMsg}</p>
                        : <p>{generalErrorMessage}</p>)
                    }
                    {passwordMismatch && <p>{passwordMismatchMsg}</p>}
                </div>
            </div>
            <div className={classes.promptContainer}>
                <div className={classes.promptUnit}>
                    <span>{loginPromptText}</span>
                    <button className={classes.btnAlternative}
                        onClick={signUpProps.toggleMode}
                        type="button">
                        Login
                </button>
                </div>
            </div >
        </>
    );
};

export default SignUpForm;
