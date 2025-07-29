import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const SuspenseComponent = () => {
  return (
    <Suspense fallback={<div>Loading lazy component...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseComponent;