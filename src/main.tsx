import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home.tsx'
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5ad0djWH9Zc31UT2Na');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
