import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnalyticsSectionVerticalNav1 from '../components/vertical-nav/AnalyticsSectionVerticalNav1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Analytics() {
  useEffect(() => {
    window.updateCharts();
  });

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AnalyticsSectionVerticalNav1 />
    </React.Fragment>
  );
}

