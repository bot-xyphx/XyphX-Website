import { createRoot } from 'react-dom/client'
import './index.css'
import Render from './Render';
import { AuthProvider } from './hooks/useAuth';

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Render />
  </AuthProvider>
);
