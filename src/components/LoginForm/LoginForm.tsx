import React from 'react';
import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import { Login } from '../../services/auth.service';
import { CredentialsType } from '../../types/Types';
import loginFormStyle from './loginFormStyle';

const signUpPromptText = "Don't have an account?";

const useStyles = loginFormStyle;

type LoginProps = {
    toggleMode: () => void;
}

const LoginForm: React.FC<LoginProps> = (loginProps: LoginProps) => {
    const classes = useStyles();

    const [credentials, setLoginCredentials] = React.useState<CredentialsType>({ email: '', password: '' });
    const [loginSuccess, setLoginSuccess] = React.useState<boolean>(false);
    const [loginFailed, setLoginFailed] = React.useState<boolean>(false);
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);

    // const emailInput: RefObject<HTMLInputElement> = React.createRef();
    const resetScreen = (): void => {
        setLoginFailed(false);
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
        Login(credentials)
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
                    setLoginSuccess(true);
                },
                (error: any) => {
                    console.log(error.response);
                    setLoginFailed(true);
                }
            )
    }

    const submit = (event: React.SyntheticEvent<EventTarget>): void => {
        setLoadingSpinner(true);
        return loginSubmit(event);
    }

    if (loginSuccess) {
        return (<Redirect to="/mainboard/home" />);
    }

    // React.useEffect(() => {
    //     const subscription = new Subscription();

    //     return () => subscription.unsubscribe();
    // });

    return (
        <>
            <form autoComplete="off" className={classes.form} id="form-submit"
                onSubmit={submit}>
                <input className={classes.inputFields}
                    onChange={setEmail}
                    placeholder="Email"
                    // ref={emailInput}
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
                    {loginFailed
                        && (<p>*The username or password you have entered is invalid.
                            <br /> Please try again.</p>)
                    }
                </div>
            </div>
            <div className={classes.prompt}>
                {signUpPromptText}
                <button className={classes.btnAlternative}
                    onClick={loginProps.toggleMode}
                    type="button">
                    Sign Up
                </button>
            </div>
        </>
    );
};

export default LoginForm;
