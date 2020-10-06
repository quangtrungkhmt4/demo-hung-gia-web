import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Logo } from '../../../assets/images';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 88,
    position: 'fixed',
    zIndex: 1001,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0.75',
    boxShadow: '0 0 10px rgba(0,0,0,.4)',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 1200,
    margin: '0px auto',
  },
  logo: {
    '& img': {
      height: 80,
      width: 80,
      cursor: 'pointer',
    }
  },
  stickerMenu: {
    display: 'flex',
    alignItems: 'center',
    '& div': {
      marginRight: 25,
      fontWeight: 600,
      cursor: 'pointer',
    },
    '& :last-child': {
      marginRight: 0,
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

function NavbarDesktopComponent() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img src={Logo} alt={Logo + 'logo'}/>
        </div>
        <div className={classes.stickerMenu}>
          <div>Trang chủ</div>
          <div>Về chúng tôi</div>
          <div>Sản phẩm</div>
          <div>Dự án tiêu biểu</div>
          <div>Thư viện</div>
          <div>Blog</div>
          <div>Liên hệ</div>
          <div><SearchIcon /></div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktopComponent;
