import React, { lazy, Suspense } from 'react';

import PageLoader from './PageLoader';

const DynamicLoader = (path, CustomLoader) => {
  const AsyncComponent = lazy(path);

  return props => {
    return (
      <Suspense fallback={CustomLoader ? CustomLoader : <PageLoader />}>
        <AsyncComponent {...props} />
      </Suspense>
    );
  };
};

export default DynamicLoader;