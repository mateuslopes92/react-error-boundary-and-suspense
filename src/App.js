import { useState } from 'react';
import { ErrorBoundaryWrapper } from './components/ErrorBoundaryWrapper';
import ErrorComponent from './components/ErrorComponent';
import SuspenseComponent from './components/SuspenseWrapper';

function App() {
  const [showBroken, setShowBroken] = useState(false);

  return (
    <div>
      <h1>Error boundary and Suspense(with Lazy) on React 🙃</h1>

      <h2>1. Suspense in action:</h2>
      <SuspenseComponent />

      <h2>2. Error boundary in action:</h2>
      <button onClick={() => setShowBroken(true)}>Trigger Broken Component</button>
      <ErrorBoundaryWrapper fallback={<p>Something went wrong</p>}>
        {showBroken && <ErrorComponent />}
      </ErrorBoundaryWrapper>

    </div>
  );
}

export default App;
