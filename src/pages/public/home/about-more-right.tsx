import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {}
}));

export const AboutMoreRightComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      AboutMiningRightComponent
    </div>
  );
}
