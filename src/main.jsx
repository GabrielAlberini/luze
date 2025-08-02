import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterApp from './router/RouterApp.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
