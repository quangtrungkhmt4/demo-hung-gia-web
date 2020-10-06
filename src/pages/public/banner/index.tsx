import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

import { Slide } from './../../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
    top: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    }
  }
}));

function BannerComponent() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Carousel autoPlay>
        <img src={"https://namgiangstone.com/Upload/banner/slide-4.jpg"} alt={Slide + "Slide"} />
        <img src={Slide} alt={Slide + "Slide"} />
        <img src={"https://namgiangstone.com/Upload/banner/slide-4.jpg"} alt={Slide + "Slide"} />
        <img src={Slide} alt={Slide + "Slide"} />
        <img src={"https://namgiangstone.com/Upload/banner/slide-4.jpg"} alt={Slide + "Slide"} />
        <img src={Slide} alt={Slide + "Slide"} />
      </Carousel>
    </div>
  );
}

export default BannerComponent;
