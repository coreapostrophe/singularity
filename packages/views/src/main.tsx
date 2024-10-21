import { FC, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Singularity from './singularity.tsx';

const App: FC = () => {
  return <Singularity />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
