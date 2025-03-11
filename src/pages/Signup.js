import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SignupSectionCustomComponents1 from '../components/custom-components/SignupSectionCustomComponents1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Signup() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <SignupSectionCustomComponents1 />
    </React.Fragment>
  );
}

