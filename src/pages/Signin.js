import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SigninSectionCustomComponents1 from '../components/custom-components/SigninSectionCustomComponents1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Signin() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <SigninSectionCustomComponents1 />
    </React.Fragment>
  );
}

