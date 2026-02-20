import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// ✅ Ionic core setup
import { setupIonicReact } from '@ionic/react';
setupIonicReact();

// ✅ REQUIRED Ionic CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// optional (recommended)
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

