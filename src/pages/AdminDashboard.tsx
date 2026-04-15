import React from "react";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";
import { 
  LogOut, 
  LayoutDashboard, 
  Users, 
  Settings, 
  Shield, 
  Bell,
  Search,
  ExternalLink
} from "lucide-react";

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const mockStats = [
    { label: "Active Sessions", value: "1,284", icon: Users, color: "text-blue-400" },
    { label: "System Security", value: "99.9%", icon: Shield, color: "text-emerald-400" },
    { label: "Alerts", value: "0", icon: Bell, color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-white/5 bg-[#0a0a0a] lg:block">
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">XyphX OS</span>
          </div>

          <nav className="flex-1 space-y-1">
            <NavItem icon={LayoutDashboard} label="Dashboard" active />
            <NavItem icon={Users} label="Team" />
            <NavItem icon={Settings} label="System Config" />
          </nav>

          <button 
            onClick={logout}
            className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout System</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Administrative Terminal</h1>
            <p className="text-zinc-400">Welcome back, {user?.displayName || "Admin"}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium placeholder:text-zinc-600"
              />
            </div>
            <img 
              src={user?.photoURL || ""} 
              alt="Avatar" 
              className="h-10 w-10 rounded-full border border-white/20"
            />
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {mockStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <div className={`${stat.color} mb-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <section className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Recent Authorization Requests</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
              View Audit Logs <ExternalLink className="h-3 w-3" />
            </button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.02] bg-white/[0.01]">
                <div className="flex gap-4 items-center">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 animate-pulse" />
                  <div>
                    <div className="h-4 w-32 bg-zinc-800 rounded mb-2 animate-pulse" />
                    <div className="h-3 w-20 bg-zinc-900 rounded animate-pulse" />
                  </div>
                </div>
                <div className="h-8 w-20 bg-zinc-800 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }: any) => (
  <a 
    href="#" 
    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
      active 
        ? "bg-blue-600/10 text-blue-400" 
        : "text-zinc-400 hover:bg-white/5 hover:text-white"
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </a>
);

export default AdminDashboard;
