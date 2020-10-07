import React from 'react';

import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

import { LoginUser, SignupUser } from '../../services/data.service';
import { TCredentials } from '../../types/Types';
import loginFormStyle from './loginFormStyle';

const registerPromptText = "Don't have an account?";
const loginPromptText = "Already have an account? Log in!";
const useStyles = loginFormStyle;

const LoginForm: React.FC = () => {
    const [credentials, setLoginCredentials] = React.useState<TCredentials>({ email: '', password: '' });
    const [loginSignupMode, setLoginSingupMode] = React.useState<boolean>(true);

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setLoginCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        setLoginCredentials({ ...credentials, password: event.currentTarget.value });
    };

    const loginSubmit = (event: any): void => {
        event.preventDefault();
        LoginUser(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
            )
            .subscribe((response) => {
                console.log(response);
            })
    }

    const signupSubmit = (event: any): void => {
        event.preventDefault();
        SignupUser(credentials)
            .pipe(
                map(
                    (response: AxiosResponse) => response.data
                ),
            )
            .subscribe((response) => {
                console.log(response);
            })
    }

    const toggleLoginSignupMode = (): void => {
        setLoginSingupMode(!loginSignupMode);
    }
    const classes = useStyles();
    if (loginSignupMode) {
        return (
            <>
                <form autoComplete="off" className={classes.form} id="login-submit"
                    onSubmit={loginSubmit}>
                    <input className={classes.inputFields}
                        onChange={setEmail} placeholder="email"
                        type="text"
                        value={credentials?.email} />
                    <input className={classes.inputFields}
                        onChange={setPassword}
                        placeholder="password"
                        type="password" />

                </form>
                <button className={classes.btn} form="login-submit" type="submit">Login</button>
                <div className={classes.registerPrompt}>{registerPromptText}
                </div>
                <button className={classes.btn} onClick={toggleLoginSignupMode} type="button">Sign Up</button>

            </>
        );
    }
    return (
        <>
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
            <div className={classes.registerPrompt}>{loginPromptText}
            </div>
            <button className={classes.btn} onClick={toggleLoginSignupMode} type="button">Login</button>

        </>
    );

    // return (<div>Register</div>)
};

export default LoginForm;
