

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { inject } from '@vercel/analytics';

// Call the function as early as possible in your application lifecycle
inject({
  debug: true, // This will log events to the console even on localhost
  mode: 'development' // Forces the script to run
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
