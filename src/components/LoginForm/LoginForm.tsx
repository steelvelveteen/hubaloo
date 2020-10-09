import React from 'react';
import { Redirect } from "react-router-dom";

import { AxiosResponse } from 'axios';
import { map, finalize } from 'rxjs/operators';

import { Login, Signup } from '../../services/login-signup.service';
import { CredentialsType } from '../../types/Types';
import loginFormStyle from './loginFormStyle';

const signUpPromptText = "Don't have an account?";
const loginPromptText = "Already have an account?";

const useStyles = loginFormStyle;

let validationErrorMsg: string[] = [];

const LoginForm: React.FC = () => {
    const classes = useStyles();

    const [credentials, setLoginCredentials] = React.useState<CredentialsType>({ email: '', password: '' });

    const [loginSuccessfull, setLoginSuccessfull] = React.useState<boolean>(false);

    // If signup successfull redirect to complete user info form
    // const [signupSucessfull, setSignupSuccessfull] = React.useState<boolean>(false);
    const [loginSignupMode, setLoginSingupMode] = React.useState<boolean>(true);

    const [loginFailed, setLoginFailed] = React.useState<boolean>(false);
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);

    const resetScreen = (): void => {
        setLoginFailed(false);
        setValidationFailed(false);
        // setLoadingSpinner(false);
    }

    const toggleLoginSignupMode = (): void => {
        resetScreen();
        setLoginCredentials({ email: '', password: '' });
        setLoginSingupMode(!loginSignupMode);
    }

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setLoginCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setLoginCredentials({ ...credentials, password: event.currentTarget.value });
    };

    const loginSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        Login(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
                finalize(() => setLoadingSpinner(false))
            )
            .subscribe(
                // Store token and user email
                // console.log(response);
                // (response: { token: string, email: string }) => {
                () => {
                    // setLoadingSpinner(false);
                    setLoginSuccessfull(true);
                },
                () => {
                    setLoginFailed(true);
                }
            )
    }

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
        // loginSignupMode ? loginSubmit(event) : signupSubmit(event);
        setLoadingSpinner(true);
        if (loginSignupMode) {
            loginSubmit(event);
        } else {
            signupSubmit(event);
        }
    }

    if (loginSuccessfull) {
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
            <button className={classes.btn}
                form="form-submit"
                type="submit">
                {loginSignupMode ? "Login" : "Sign Up"}
                {loadingSpinner ? <span className={classes.spinner}>Spinner....</span> : <div />}
            </button>

            { loginSignupMode ? <>
                { loginFailed
                    && (<div className={classes.errorMessage}>
                        *The username or password you have entered is invalid. Please try again.
                    </div>)
                }
            </> : <>
                    { validationFailed && (
                        validationErrorMsg
                            .map((msg: string) => <div className={classes.errorMessage}>
                                ** {msg}</div>)
                    )}
                </>
            }
            <div className={classes.prompt}>
                {loginSignupMode ? (signUpPromptText) : (loginPromptText)}
                <button className={classes.btnAlternative}
                    onClick={toggleLoginSignupMode}
                    type="button">
                    {!loginSignupMode ? "Login" : "Sign Up"}
                </button>
            </div>
        </>
    );
};

export default LoginForm;
