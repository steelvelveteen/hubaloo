import React from 'react';
import { Redirect } from "react-router-dom";

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import { LoginUser, SignupUser } from '../../services/data.service';
import { TCredentials } from '../../types/Types';
import loginFormStyle from './loginFormStyle';

const registerPromptText = "Don't have an account?";
const loginPromptText = "Already have an account? Log in!";

const useStyles = loginFormStyle;

let validationErrorMsg: string[] = [];

const LoginForm: React.FC = () => {
    const classes = useStyles();

    const [credentials, setLoginCredentials] = React.useState<TCredentials>({ email: '', password: '' });

    const [loginSuccessfull, setLoginSuccessfull] = React.useState<boolean>(false);

    // If signup successfull redirect to complete user info form
    // const [signupSucessfull, setSignupSuccessfull] = React.useState<boolean>(false);
    const [loginSignupMode, setLoginSingupMode] = React.useState<boolean>(true);

    const [loginFailed, setLoginFailed] = React.useState<boolean>(false);
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);

    const toggleLoginSignupMode = (): void => {
        setLoginSingupMode(!loginSignupMode);
    }

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setLoginFailed(false);
        setLoginCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        setLoginFailed(false);
        setLoginCredentials({ ...credentials, password: event.currentTarget.value });
    };

    const loginSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        LoginUser(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
            )
            .subscribe(
                (response: { token: string, email: string }) => {
                    // Store token and user email
                    console.log(response);
                    setLoginSuccessfull(true);
                },
                (error: Error) => {
                    setLoginFailed(true);
                }
            )
    }

    const signupSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        validationErrorMsg = [];
        event.preventDefault();
        SignupUser(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
            )
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (error: any) => {
                    error.response.data.error.forEach((err: any) => {
                        validationErrorMsg.push(err.msg);
                        validationErrorMsg.map((m: string) => console.log(m));
                    });
                    setValidationFailed(true);
                }
            );
    }

    if (loginSuccessfull) {
        return (<Redirect to="/mainboard/home" />);
    }
    return (
        <>
            { loginSignupMode

                ? <>
                    <form autoComplete="off" className={classes.form} id="login-submit"
                        onSubmit={loginSubmit}>
                        <input className={classes.inputFields}
                            onChange={setEmail}
                            placeholder="email"
                            type="text"
                            value={credentials?.email} />
                        <input className={classes.inputFields}
                            onChange={setPassword}
                            placeholder="password"
                            type="password" />

                    </form>
                    <button className={classes.btn} form="login-submit" type="submit">Login</button>

                    { loginFailed && <div className={classes.errorMessage}>The username or password you have entered is invalid. Please try again.</div>}

                    <div className={classes.registerPrompt}>{registerPromptText}
                    </div>
                    <button className={classes.btn} onClick={toggleLoginSignupMode} type="button">Sign Up</button>
                </> : <>
                    <form autoComplete="off" className={classes.form} id="signup-submit"
                        onSubmit={signupSubmit}>
                        <input className={classes.inputFields}
                            onChange={setEmail} placeholder="email"
                            type="text"
                            value={credentials?.email} />
                        <input className={classes.inputFields}
                            onChange={setPassword}
                            placeholder="password"
                            type="password" />

                    </form>
                    <button className={classes.btn} form="signup-submit" type="submit">Sign Up</button>

                    { validationFailed && (
                        validationErrorMsg
                            .map((msg: string) => <div className={classes.errorMessage}>{msg}</div>)
                    )}

                    <div className={classes.registerPrompt}>{loginPromptText}
                    </div>
                    <button className={classes.btn} onClick={toggleLoginSignupMode} type="button">Login</button>

                </>
            }
        </>
    );
};

export default LoginForm;
