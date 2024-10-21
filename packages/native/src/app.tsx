import Singularity from '@singularity/views';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { FC, useMemo } from 'react';

const App: FC = () => {
  const window = useMemo(() => getCurrentWindow(), []);

  return <Singularity window={window} />;
};

export default App;
