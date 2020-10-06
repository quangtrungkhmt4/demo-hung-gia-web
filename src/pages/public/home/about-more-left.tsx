import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    height: 450,
    width: '100%',
    marginTop: theme.spacing(6),
    display: 'flex',
  },
  thumbnailMoreImage: {
    width: '70%',
    height: 'inherit',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      minHeight: '100%',
      objectFit: 'cover',
    }
  },
  content: {
    padding: '0 80px',
    display: 'flex',
    justifyContent: 'center',
    background: '#ececec',
    position: 'relative',
    width: '30%',
    height: 'inherit',
    flexDirection: 'column',
    '& :last-child': {
      marginBottom: theme.spacing(0),
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      right: -26,
      transform: 'translate(0,-50%)',
      borderTop: '26px solid transparent',
      borderBottom: '26px solid transparent',
      borderLeft:' 26px solid #ececec',
    }
  },
  title: {
    cursor: 'pointer',
    fontSize: 24,
    fontWeight: 700,
    color: '#000',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
  },
  contentItem: {
    fontSize: 14,
    marginBottom: theme.spacing(2),
    '&::before': {
      content: "'>'",
      marginRight: theme.spacing(0.5),
    }
  },
}));

export const AboutMoreLeftComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>Về khai thác</div>
        <div className={classes.contentItem}>Khai thác độc quyền 2 mỏ đá tự nhiên tại Thanh Hoá và 1 mỏ ở Vinh.</div>
        <div className={classes.contentItem}>Tổng trữ lượng hơn triệu m3.</div>
        <div className={classes.contentItem}>Sản phẩm đá tự nhiên đạt chuẩn quốc tế.</div>
      </div>
      <div className={classes.thumbnailMoreImage}>
        <img src="https://namgiangstone.com/Upload/Introduce/gt-khai-thac.jpg" alt="abc"/>
      </div>
    </div>
  );
}
