import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPaswordForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import WelcomeTitle from '../../components/WelcomeTitle/WelcomeTitle';
import landingPageStyle from './landingPageStyle';

const useStyles = landingPageStyle;
const LandingPage: React.FC = () => {
  const classes = useStyles();
  const [isLoginMode, setLoginMode] = React.useState<boolean>(true);
  const [isSignUpMode, setSignUpMode] = React.useState<boolean>(false);
  const [isPasswordResetMode, setPasswordResetMode] = React.useState<boolean>(false);

  const toggleLoginMode = (): void => {
    setLoginMode(true);
    setSignUpMode(false);
    setPasswordResetMode(false);
  }

  const toggleSignUpMode = (): void => {
    setLoginMode(false);
    setSignUpMode(true);
    setPasswordResetMode(false);
  }

  const togglePasswordResetMode = (): void => {
    setLoginMode(false);
    setSignUpMode(false);
    setPasswordResetMode(true);
  }

  return (
    <>
      <div className={classes.showcase}>
        <div className={classes.backgroundContainer} />
        <div className={classes.formContainer}>
          <WelcomeTitle />
          {isLoginMode && <LoginForm
            togglePasswordResetMode={togglePasswordResetMode}
            toggleSignUpMode={toggleSignUpMode}
          />}
          {isSignUpMode && <SignUpForm toggleLoginMode={toggleLoginMode} />}
          {isPasswordResetMode && <ResetPasswordForm toggleLoginMode={toggleLoginMode} />}
        </div>

      </div>
    </>
  );
};

export default LandingPage;
