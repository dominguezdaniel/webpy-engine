import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AcercaSectionVerticalNav1 from '../components/vertical-nav/AcercaSectionVerticalNav1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Acerca() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AcercaSectionVerticalNav1 />
    </React.Fragment>
  );
}

