import React from 'react';
// import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import * as AuthService from '../../services/auth.service';
import { ResetCredentialsType } from '../../types/Types';
import loginFormStyle from '../LoginForm/loginFormStyle';

const useStyles = loginFormStyle;

let validationErrorMsg: string[] = [];

type ResetPasswordProps = {
    toggleMode?: () => void;
    togglePasswordResetMode: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordProps> = (resetProps: ResetPasswordProps) => {
    const classes = useStyles();
    const confirmPasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const [newCredentials, setNewCredentials] = React.useState<ResetCredentialsType>({ email: '', newPassword: '' });
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);
    const [passwordMismatch, setPasswordMismatch] = React.useState<boolean>(false);

    const resetScreen = (): void => {
        setValidationFailed(false);
        setPasswordMismatch(false);
    }

    const setEmail = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setNewCredentials({ ...newCredentials, email: event.currentTarget.value });
    };

    const setPassword = (event: React.FormEvent<HTMLInputElement>) => {
        resetScreen();
        setNewCredentials({ ...newCredentials, newPassword: event.currentTarget.value });
    };

    const resetPasswordSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        validationErrorMsg = [];
        event.preventDefault();
        AuthService.ResetPassword(newCredentials)
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
                    // if (error.response.status === 422) {
                    //     error.response.data.error.forEach((err: any) => {
                    //         validationErrorMsg.push(err.msg);
                    //     });
                    // } else if (error.response.status === 409) {
                    //     validationErrorMsg.push(error.response.data.message);
                    // }
                    setValidationFailed(true);
                }
            );
    }

    const submit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        if (AuthService.validateEmail(newCredentials.email) === null) {
            validationErrorMsg = [];
            validationErrorMsg = [...validationErrorMsg, "Please enter a valid email"];
            setValidationFailed(true);
            return;
        }
        if (!AuthService.validatePassword(newCredentials.newPassword)) {
            validationErrorMsg = [];
            validationErrorMsg = [...validationErrorMsg, "Your password must be at least 8 characters long"];
            setValidationFailed(true);
            return;
        }
        if (confirmPasswordRef?.current?.value !== newCredentials.newPassword) {
            setPasswordMismatch(true);
            return;
        }
        setLoadingSpinner(true);
        resetPasswordSubmit(event);
    }

    return (
        <>
            <form autoComplete="off" className={classes.form} id="form-submit"
                onSubmit={submit}>
                <input className={classes.inputFields}
                    onChange={setEmail}
                    placeholder="Your current email"
                    type="text"
                    value={newCredentials?.email} />
                <input className={classes.inputFields}
                    onChange={setPassword}
                    placeholder="Enter new password"
                    type="password"
                    value={newCredentials?.newPassword}
                />
                <input className={classes.inputFields}
                    onChange={resetScreen}
                    placeholder="Confirm new password"
                    ref={confirmPasswordRef}
                    type="password"
                />
            </form>
            { loadingSpinner
                ? <CircularProgress className={classes.spinner} />
                : <button className={classes.btn}
                    form="form-submit"
                    type="submit">
                    Reset password
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
            <div className={classes.promptContainer}>
                {/* {loginPromptText} */}
                <span>Return to Login</span>
                <button className={classes.btnAlternative}
                    onClick={resetProps.togglePasswordResetMode}
                    type="button">
                    Login
                </button>
            </div>
        </>
    )
}

export default ResetPasswordForm;
