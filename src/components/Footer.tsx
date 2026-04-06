import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(201,169,97,0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
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
                  }}
                >
                  NS & PARTNERS
                </div>
                <div
                  style={{
                    color: "#666",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  Advocates & Legal Consultants
                </div>
              </div>
            </div>
            <p
              style={{
                color: "#aaa",
                lineHeight: 1.7,
                fontStyle: "italic",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "15px",
              }}
            >
              "Practical solutions tailored to legal and commercial objectives."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#C9A961",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Quick Links
            </h4>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About the Firm" },
              { path: "/leadership", label: "Leadership" },
              { path: "/practice-areas", label: "Practice Areas" },
              { path: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: "block",
                  color: "#999",
                  textDecoration: "none",
                  fontSize: "13px",
                  marginBottom: "10px",
                  letterSpacing: "0.03em",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A961")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#999")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Practice Areas */}
          <div>
            <h4
              style={{
                color: "#C9A961",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Practice Areas
            </h4>
            {[
              "Intellectual Property",
              "Corporate & Commercial",
              "Real Estate",
              "Criminal Litigation",
              "Banking & Finance",
              "Start-up Solutions",
            ].map((area) => (
              <Link
                key={area}
                to="/practice-areas"
                style={{
                  display: "block",
                  color: "#999",
                  textDecoration: "none",
                  fontSize: "13px",
                  marginBottom: "10px",
                  letterSpacing: "0.03em",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A961")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#999")
                }
              >
                {area}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "#C9A961",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <FiPhone
                size={14}
                color="#C9A961"
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <span style={{ color: "#999", fontSize: "13px" }}>
                +91 80917 01723
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <FiMail
                size={14}
                color="#C9A961"
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <span style={{ color: "#999", fontSize: "13px" }}>
                mandhotranikhil@gmail.com
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
            >
              <FiMapPin
                size={14}
                color="#C9A961"
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <span style={{ color: "#999", fontSize: "13px" }}>
                New Delhi | Dehradun | Himachal Pradesh
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p
            style={{ color: "#555", fontSize: "12px", letterSpacing: "0.05em" }}
          >
            © {new Date().getFullYear()} NS & Partners. All rights reserved.
          </p>
          <p
            style={{ color: "#555", fontSize: "12px", letterSpacing: "0.05em" }}
          >
            Advocates & Legal Consultants
          </p>
        </div>
      </div>
    </footer>
  );
}
