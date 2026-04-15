import { createRoot } from 'react-dom/client'
import './index.css'
import Render from './Render';
import { AuthProvider } from './hooks/useAuth';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <AuthProvider>
      <Render />
    </AuthProvider>
  </HelmetProvider>
);
