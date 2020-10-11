import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import ResetPasswordForm from '../../components/ResetPasswordForm/ResetPaswordForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import landingPageStyle from './landingPageStyle';

const useStyles = landingPageStyle;

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const videoSource = "videos/ocean_wave.mov";

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
        <div className={classes.videoContainer}>
          <video autoPlay className={classes.video} loop
            muted src={videoSource}>
            Your browser does not support the video
        </video>
        </div>
        {!passwordResetMode
          ? <div className={classes.content}>
            <h4 className={classes.welcomeTitle}>Welcome to habaloo</h4>
            {loginMode ? <LoginForm
              toggleMode={toggleLoginSignUpMode}
              togglePasswordResetMode={togglePasswordResetMode} />
              : <SignUpForm toggleMode={toggleLoginSignUpMode} />}
          </div>
          : <div className={classes.content}>
            <h4 className={classes.welcomeTitle}>Reset password</h4>
            <ResetPasswordForm togglePasswordResetMode={togglePasswordResetMode} />
          </div>
        }
      </div>
    </>
  );
};

export default LandingPage;
