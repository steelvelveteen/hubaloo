import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPaswordForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import landingPageStyle from './landingPageStyle';

const useStyles = landingPageStyle;
const LandingPage: React.FC = () => {
  const classes = useStyles();
  const [loginMode, setLoginMode] = React.useState<boolean>(true);
  const [passwordResetMode, setPasswordResetMode] = React.useState<boolean>(false);

  const toggleLoginSignUpMode = (): void => {
    setLoginMode(!loginMode);
  }

  const togglePasswordResetMode = (): void => {
    setLoginMode(true);
    setPasswordResetMode(!passwordResetMode);
  }

  return (
    <>
      <div className={classes.showcase}>
        <div className={classes.backgroundContainer} />
        {!passwordResetMode
          ? <div className={classes.formContainer}>
            <h3 className={classes.welcomeTitle}>Welcome to </h3>
            <h4 className={classes.welcomeTitle}>Hubaloo</h4>
            {loginMode ? <LoginForm
              toggleMode={toggleLoginSignUpMode}
              togglePasswordResetMode={togglePasswordResetMode} />
              : <SignUpForm toggleMode={toggleLoginSignUpMode} />}
          </div>
          : <div className={classes.formContainer}>
            <h4 className={classes.welcomeTitle}>Reset password</h4>
            <ResetPasswordForm togglePasswordResetMode={togglePasswordResetMode} />
          </div>
        }
      </div>
    </>
  );
};

export default LandingPage;
