import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "@/data/constants";

interface NavbarProps {
  activeSection: string;
  navTo: (id: string) => void;
}

export default function Navbar({ activeSection, navTo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavTo = (id: string) => {
    setMobileMenuOpen(false);
    navTo(id);
  };

  return (
    <nav style={{ background: "rgba(6,10,15,0.95)", borderBottom: "1px solid rgba(0,245,255,0.1)", backdropFilter: "blur(20px)" }} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNavTo("home")} className="flex items-center gap-2">
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, var(--neon-cyan), #005f6b)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 15px rgba(0,245,255,0.4)" }}>
              <Icon name="Zap" size={20} color="#060a0f" />
            </div>
            <span className="section-title text-xl" style={{ color: "var(--neon-cyan)", textShadow: "0 0 15px rgba(0,245,255,0.5)" }}>GAME<span style={{ color: "#fff" }}>VAULT</span></span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.filter(n => n.id !== "profile").map(item => (
              <button key={item.id} onClick={() => handleNavTo(item.id)}
                className={`nav-link text-sm font-medium ${activeSection === item.id ? "active" : ""}`}
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em", fontSize: 15 }}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => handleNavTo("profile")} className="btn-neon px-4 py-2 rounded-lg text-sm font-semibold hidden md:flex items-center gap-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              <Icon name="User" size={16} /> Профиль
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg" style={{ color: "var(--neon-cyan)" }}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{ background: "rgba(6,10,15,0.98)", borderTop: "1px solid rgba(0,245,255,0.1)" }} className="md:hidden px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => handleNavTo(item.id)}
              className={`nav-link text-left py-2 text-base ${activeSection === item.id ? "active" : ""}`}
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.05em" }}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
