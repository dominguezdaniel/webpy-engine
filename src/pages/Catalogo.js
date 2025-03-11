import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CatalogoSectionVerticalNav1 from '../components/vertical-nav/CatalogoSectionVerticalNav1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Catalogo() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <CatalogoSectionVerticalNav1 />
    </React.Fragment>
  );
}

