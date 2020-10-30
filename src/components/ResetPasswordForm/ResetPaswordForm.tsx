import React from 'react';
// import { Redirect } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import { AxiosError, AxiosResponse } from 'axios';
import { finalize, map } from 'rxjs/operators';

import * as AuthService from '../../services/auth.service';
import FormStyles from '../../styles/formStyles';
import { ResetCredentialsType } from '../../types/Types';

const resetPasswordPromptText = "Reset password";
const returnToLoginPromptText = "Back to Login";
const generalErrorMessage = "Something went wrong. Please try again later";
const invalidEmailMsg = "Please enter a valid email";
const invalidPasswordMsg = "You must provide your password for logging in";

const useStyles = FormStyles;

let validationErrorMsg = '';

type ResetPasswordProps = {
    toggleMode?: () => void;
    togglePasswordResetMode: () => void;
}
type ResetSuccessType = {
    isSuccessful: boolean,
    message: string
}

const ResetPasswordForm: React.FC<ResetPasswordProps> = (resetProps: ResetPasswordProps) => {
    const classes = useStyles();
    const confirmPasswordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const [newCredentials, setNewCredentials] = React.useState<ResetCredentialsType>({ email: '', newPassword: '' });
    const [loadingSpinner, setLoadingSpinner] = React.useState<boolean>(false);
    const [validationFailed, setValidationFailed] = React.useState<boolean>(false);
    const [passwordMismatch, setPasswordMismatch] = React.useState<boolean>(false);
    const [resetSuccess, setResetSuccess] = React.useState<ResetSuccessType>({ isSuccessful: false, message: '' });

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
                    setResetSuccess({ isSuccessful: true, message: response.message });
                },
                (error: AxiosError) => {
                    // if (error.response.status === 422) {
                    //     error.response.data.error.forEach((err: any) => {
                    //         validationErrorMsg = err.msg;
                    //     });
                    // } else if (error.response.status === 409) {
                    //     validationErrorMsg = error?.response?.data.message;
                    // }
                    validationErrorMsg = error?.response?.data.message;
                    setValidationFailed(true);
                }
            );
    }

    const submit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();
        if (AuthService.validateEmail(newCredentials.email) === null) {
            validationErrorMsg = invalidEmailMsg;
            setValidationFailed(true);
            return;
        }
        if (!AuthService.validatePassword(newCredentials.newPassword)) {
            validationErrorMsg = invalidPasswordMsg;
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
                    {resetPasswordPromptText}
                </button>
            }
            <div className={classes.errorMsgContainer}>
                <div className={classes.errorMessage}>
                    {validationFailed && (validationErrorMsg
                        ? <p>{validationErrorMsg}</p>
                        : <p>{generalErrorMessage}</p>)
                    }
                    {passwordMismatch && <p>***Passwords do not match</p>}
                </div>
                {resetSuccess.isSuccessful && <div className={classes.successMessage}>{resetSuccess.message}</div>}
            </div>

            <div className={classes.promptContainer}>
                <span>{returnToLoginPromptText}</span>
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
