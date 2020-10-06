import React from 'react';
import PublicWrappers from './pages/public/index';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
  }
}));

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <PublicWrappers />
    </div>
  );
}

export default App;
