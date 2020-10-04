import React from 'react';

import landingPageStyle from './landingPageStyle';

const useStyles = landingPageStyle;
const LandingPage: React.FC = () => {
  const classes = useStyles();
  const videoSource = "videos/ocean_wave.mov";
  return (
    <section className={classes.showcase}>
      <div className={classes.videoContainer}>
        <video autoPlay className={classes.video} loop
          muted src={videoSource}>
          Your browser does not support the video
        </video>
      </div>
      <div className={classes.content}>
        <h4>Welcome to habaloo</h4>
        <a className={classes.btn} href="/mainboard/home">Enter</a>
      </div>
    </section >
  );
};

export default LandingPage;
