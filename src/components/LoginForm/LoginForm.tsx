import React from 'react';

import loginFormStyle from './loginFormStyle';

type LoginCredentials = {
    email: string;
    password: string;
};

const registerPromptText = "Don't have an account?";
const useStyles = loginFormStyle;

const LoginForm: React.FC = () => {
    const [credentials, setLoginCredentials] = React.useState<LoginCredentials>({ email: '', password: '' });

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        // console.log(event);
        setLoginCredentials({ ...credentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        setLoginCredentials({ ...credentials, password: event.currentTarget.value });
    };

    const loginSubmit = (event: any): void => {
        event.preventDefault();
        console.log(credentials);
    }

    const classes = useStyles();
    const isLoginMode = true;
    if (isLoginMode) {
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
                <button className={classes.btn} type="button">Register</button>

            </>
        )
    }
    return (<div>Register</div>)
};

export default LoginForm;
