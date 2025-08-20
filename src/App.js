import React from 'react';
import HelloWork from './HelloWork';
import NotFound from './NotFound';

function App() {
  const path = window.location.pathname;
  return path === '/' ? <HelloWork /> : <NotFound />;
}

export default App;
