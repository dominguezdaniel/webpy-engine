import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionVerticalNav1 from '../components/vertical-nav/IndexSectionVerticalNav1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionVerticalNav1 />
    </React.Fragment>
  );
}

