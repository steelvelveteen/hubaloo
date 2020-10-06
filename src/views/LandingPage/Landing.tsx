import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import landingPageStyle from './landingPageStyle';

const useStyles = landingPageStyle;
const LandingPage: React.FC = () => {
  const classes = useStyles();
  const videoSource = "videos/ocean_wave.mov";
  return (
    <>
      <div className={classes.showcase}>
        <div className={classes.videoContainer}>
          <video autoPlay className={classes.video} loop
            muted src={videoSource}>
            Your browser does not support the video
        </video>
        </div>
        <div className={classes.content}>
          <h4 className={classes.welcomeTitle}>Welcome to habaloo</h4>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
