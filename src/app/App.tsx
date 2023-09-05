import Container from '@mui/material/Container';
import { MainPage } from 'pages/MainPage';
import React, { Suspense, useEffect } from 'react';

function App() {
  return (
    <div style={{ background: '#cfe8fc', height: '100vh' }}>
      <Suspense fallback="">
        <Container maxWidth="sm">
          <MainPage />
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
