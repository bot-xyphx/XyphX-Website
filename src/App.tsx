import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastProvider } from "@radix-ui/react-toast";
import SeoHead from "./components/SeoHead";

const queryClient = new QueryClient();

const HomePage = () => (
  <>
    <SeoHead
      title="XyphX - Engineering The Future Of Tech"
      description="XyphX builds next-gen software, cloud tools, and intelligent digital products for teams that want to ship faster and scale with confidence."
      canonicalPath="/"
    />
    <Index />
  </>
);

const LoginPage = () => (
  <>
    <SeoHead
      title="Login | XyphX"
      description="Securely sign in to your XyphX account to access your workspace and management tools."
      canonicalPath="/login"
      robots="noindex, nofollow"
    />
    <Login />
  </>
);

const AdminPage = () => (
  <>
    <SeoHead
      title="Admin Dashboard | XyphX"
      description="Restricted administration dashboard for authorized XyphX team members."
      canonicalPath="/admin"
      robots="noindex, nofollow, noarchive"
    />
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  </>
);

const NotFoundPage = () => (
  <>
    <SeoHead
      title="404 - Page Not Found | XyphX"
      description="The page you requested could not be found on XyphX."
      canonicalPath="/404"
      robots="noindex, nofollow"
    />
    <NotFound />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ToastProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </ToastProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
