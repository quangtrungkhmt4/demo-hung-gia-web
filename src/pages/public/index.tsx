import React from 'react';
import NavbarComponent from './navbar/index';
import BannerComponent from './banner/index';
import { HomeComponent } from './home/index';
import { ZaloServiceSocial } from './service-social/index';

function PublicWrappers() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <BannerComponent />

      <HomeComponent />

      <ZaloServiceSocial />
    </React.Fragment>
  );
}

export default PublicWrappers;
