import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Singularity from './singularity.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Singularity />
  </StrictMode>,
);
