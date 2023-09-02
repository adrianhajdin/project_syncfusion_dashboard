import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home.tsx'
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVppR2NbfE5xfldGalxXVBYiSV9jS31Tf0VhWHxccHRTQmNbUQ==');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
