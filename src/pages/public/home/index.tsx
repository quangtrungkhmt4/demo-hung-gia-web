import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AboutUsItem } from './about-us-item';
import { AboutMoreLeftComponent } from './about-more-left';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  containerItem: {
    width: 1200
  }
}));

export const HomeComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.containerItem}>
        <AboutUsItem />
      </div>

      <AboutMoreLeftComponent />
    </div>
  );
}
