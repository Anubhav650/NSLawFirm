import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/leadership", label: "Leadership" },
  { path: "/practice-areas", label: "Practice Areas" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,169,97,0.2)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? "64px" : "80px",
            transition: "height 0.3s ease",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid #C9A961",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#C9A961",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                NS
              </span>
            </div>
            <div>
              <div
                style={{
                  color: "#C9A961",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  fontFamily: "Cormorant Garamond, serif",
                  lineHeight: 1,
                }}
              >
                NS & PARTNERS
              </div>
              <div
                style={{
                  color: "#888",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "Montserrat, sans-serif",
                  marginTop: "2px",
                }}
              >
                Advocates & Legal Consultants
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: isActive ? "#C9A961" : "#ccc",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "8px 14px",
                    position: "relative",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "#C9A961";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "#ccc";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        left: "14px",
                        right: "14px",
                        height: "1px",
                        background: "#C9A961",
                        display: "block",
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              style={{
                marginLeft: "8px",
                padding: "9px 22px",
                background: "transparent",
                border: "1px solid #C9A961",
                color: "#C9A961",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#C9A961";
                el.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "#C9A961";
              }}
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              color: "#C9A961",
              cursor: "pointer",
              padding: "8px",
              display: "none",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "#000",
              display: "flex",
              flexDirection: "column",
              padding: "100px 40px 40px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.path}
                  style={{
                    display: "block",
                    color:
                      location.pathname === link.path ? "#C9A961" : "#e5e5e5",
                    textDecoration: "none",
                    fontSize: "28px",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                    fontFamily: "Cormorant Garamond, serif",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(201,169,97,0.15)",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div
              style={{
                marginTop: "40px",
                color: "#888",
                fontSize: "12px",
                letterSpacing: "0.1em",
              }}
            >
              <div style={{ color: "#C9A961" }}>+91 80917 01723</div>
              <div style={{ marginTop: "8px" }}>mandhotranikhil@gmail.com</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
