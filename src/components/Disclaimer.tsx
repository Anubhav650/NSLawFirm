import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Flex container for centering */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleAccept}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
              zIndex: 999,
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                maxWidth: "700px",
                width: "100%",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleAccept}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  transition: "color 0.3s",
                  zIndex: 10,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#000")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#666")
                }
              >
                <FiX size={20} />
              </button>

              {/* Content */}
              <div
                style={{
                  padding: "clamp(20px, 4vw, 40px)",
                  paddingTop: "clamp(28px, 4vw, 40px)",
                  overflow: "auto",
                  flex: 1,
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(24px, 5vw, 28px)",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    color: "#8B3A3A",
                    marginBottom: "16px",
                    marginTop: 0,
                  }}
                >
                  Disclaimer
                </h2>

                <div
                  style={{
                    borderTop: "2px solid #C9A961",
                    paddingTop: "16px",
                    marginBottom: "20px",
                  }}
                />

                <div
                  style={{
                    fontSize: "clamp(13px, 2vw, 14px)",
                    lineHeight: "1.8",
                    color: "#333",
                    marginBottom: "28px",
                  }}
                >
                  <p style={{ marginBottom: "12px" }}>
                    <strong>
                      The Bar Council of India does not permit advertisement or
                      solicitation by advocates.
                    </strong>
                  </p>
                  <p style={{ marginBottom: "12px" }}>
                    By accessing this website, you confirm that you are
                    accessing this website on your own initiative to obtain
                    information about NS & Partners, without any solicitation,
                    advertisement, or inducement by NS & Partners or any person
                    associated with the firm.
                  </p>
                  <p style={{ marginBottom: "12px" }}>
                    The information provided on this website is for
                    informational purposes only and does not constitute legal
                    advice. Visiting this website does not create an
                    attorney-client relationship. Please consult with a
                    qualified legal professional for advice specific to your
                    situation.
                  </p>
                  <p style={{ marginBottom: 0 }}>
                    NS & Partners is committed to maintaining the highest
                    standards of professional ethics, integrity, and
                    confidentiality.
                  </p>
                </div>

                {/* Button Section - Fixed at bottom */}
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "clamp(12px, 3vw, 20px) clamp(20px, 4vw, 40px)",
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "#fff",
                    flexShrink: 0,
                  }}
                >
                  <button
                    onClick={handleAccept}
                    style={{
                      padding: "clamp(10px, 2vw, 12px) clamp(24px, 4vw, 32px)",
                      background: "linear-gradient(135deg, #C9A961, #A8894A)",
                      border: "none",
                      color: "#000",
                      fontSize: "clamp(11px, 2vw, 12px)",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 8px 20px rgba(201,169,97,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "";
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                    }}
                  >
                    I Agree
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
