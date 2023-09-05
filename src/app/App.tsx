import { MainPage } from 'pages/MainPage';
import React, { Suspense, useEffect } from 'react';

function App() {
  return (
    <div>
      <Suspense fallback="">
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
