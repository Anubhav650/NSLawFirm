import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import nikhilImg from "../assets/Nikhil Mandhotra.jpg";
import sujeetImg from "../assets/Sujeet Kumar.jpg";

const partnerImages: Record<string, string> = {
  "Nikhil Mandhotra": nikhilImg,
  "Sujeet Kumar": sujeetImg,
};
import {
  FiArrowRight,
  FiShield,
  FiTarget,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";

const coreValues = [
  {
    icon: <FiShield size={28} />,
    title: "Integrity & Ethics",
    desc: "Every matter handled with unwavering professional ethics and complete transparency.",
  },
  {
    icon: <FiTarget size={28} />,
    title: "Strategic Advocacy",
    desc: "Precision-crafted legal strategies tailored to your specific legal and commercial objectives.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Client-Centric Approach",
    desc: "Your interests are our priority — we listen, advise, and advocate with full commitment.",
  },
  {
    icon: <FiAward size={28} />,
    title: "Excellence in Litigation",
    desc: "Proven track record across Supreme Court, High Courts, and specialist tribunals nationwide.",
  },
];

const practiceHighlights = [
  {
    num: "01",
    title: "Dispute Resolution",
    desc: "Supreme Court · High Courts · Tribunals",
  },
  {
    num: "02",
    title: "Corporate Advisory",
    desc: "Start-ups · Transactions · Compliance",
  },
  {
    num: "03",
    title: "Intellectual Property",
    desc: "Trademarks · Copyrights · Patents",
  },
  {
    num: "04",
    title: "Real Estate",
    desc: "Litigation · Transactions · Due Diligence",
  },
  {
    num: "05",
    title: "Criminal Litigation",
    desc: "IPC · Economic Offences · Bail Matters",
  },
  {
    num: "06",
    title: "Tax & GST",
    desc: "Advisory · Litigation · ITAT · GSTAT",
  },
];

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(160deg, #000 0%, #0d0d0d 50%, #000 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "1px",
              height: "120px",
              background:
                "linear-gradient(to bottom, transparent, rgba(201,169,97,0.4), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              right: "8%",
              width: "1px",
              height: "80px",
              background:
                "linear-gradient(to bottom, transparent, rgba(201,169,97,0.3), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              right: "15%",
              width: "80px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(201,169,97,0.2), transparent)",
            }}
          />
          {/* Large faint "NS" watermark */}
          <div
            style={{
              position: "absolute",
              right: "-40px",
              bottom: "-60px",
              fontSize: "400px",
              fontFamily: "Cormorant Garamond, serif",
              color: "rgba(201,169,97,0.03)",
              fontWeight: 700,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            NS
          </div>
        </div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "120px 24px 80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#C9A961" }}
              />
              <span
                style={{
                  color: "#C9A961",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                Advocates & Legal Consultants
              </span>
            </motion.div>

            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "1.5px solid #C9A961",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  color: "#C9A961",
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                NS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#fff",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              NS &amp; PARTNERS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                transformOrigin: "left",
                width: "80px",
                height: "2px",
                background: "#C9A961",
                marginBottom: "24px",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{
                fontSize: "clamp(14px, 2.5vw, 18px)",
                color: "#C9A961",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 400,
                marginBottom: "32px",
              }}
            >
              Strategic Legal Advisory &amp; Dispute Resolution
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              style={{
                fontSize: "15px",
                color: "#aaa",
                lineHeight: 1.9,
                maxWidth: "560px",
                marginBottom: "48px",
              }}
            >
              A modern legal practice delivering strategic, business-oriented
              and ethically grounded legal services across India — combining
              litigation expertise with deep advisory capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
            >
              <Link
                to="/practice-areas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #C9A961, #A8894A)",
                  color: "#000",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 30px rgba(201,169,97,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                Our Practice Areas <FiArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px 31px",
                  background: "transparent",
                  border: "1px solid #C9A961",
                  color: "#C9A961",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C9A961";
                  (e.currentTarget as HTMLElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#C9A961";
                }}
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: "#555",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #C9A961, transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ─── INTRO BAND ───────────────────────────────────────── */}
      <section
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(201,169,97,0.15)",
          borderBottom: "1px solid rgba(201,169,97,0.15)",
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "48px",
          }}
        >
          {[
            { label: "Practice Areas", value: "19+" },
            { label: "Offices Across India", value: "3" },
            { label: "Forums & Tribunals", value: "Pan-India" },
            { label: "Client Focus", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "28px",
                  color: "#C9A961",
                  fontWeight: 500,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#666",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT INTRO ──────────────────────────────────────── */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "80px",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "#C9A961",
                    }}
                  />
                  <span
                    style={{
                      color: "#C9A961",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    About the Firm
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                  }}
                >
                  A Modern Practice Rooted in Principle
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    background: "#C9A961",
                    marginBottom: "24px",
                  }}
                />
                <p
                  style={{
                    color: "#aaa",
                    fontSize: "14px",
                    lineHeight: 1.9,
                    marginBottom: "20px",
                  }}
                >
                  NS & Partners is a modern legal practice committed to
                  delivering strategic, business-oriented and ethically grounded
                  legal services. The firm combines litigation expertise with
                  advisory capabilities across multiple sectors, providing
                  clients with practical solutions tailored to their legal and
                  commercial objectives.
                </p>
                <p
                  style={{
                    color: "#aaa",
                    fontSize: "14px",
                    lineHeight: 1.9,
                    marginBottom: "36px",
                  }}
                >
                  With a network of professionals and associates across India,
                  the firm provides representation and advisory services in
                  courts, tribunals, and regulatory forums.
                </p>
                <Link
                  to="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#C9A961",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #C9A961",
                    paddingBottom: "4px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Learn More About the Firm <FiArrowRight size={14} />
                </Link>
              </div>
              <div>
                <blockquote
                  style={{
                    padding: "40px",
                    border: "1px solid rgba(201,169,97,0.3)",
                    background: "rgba(201,169,97,0.03)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "40px",
                      width: "80px",
                      height: "2px",
                      background: "#C9A961",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 26px)",
                      fontFamily: "Cormorant Garamond, serif",
                      color: "#e5e5e5",
                      fontStyle: "italic",
                      lineHeight: 1.5,
                      marginBottom: "24px",
                    }}
                  >
                    "Practical solutions tailored to legal and commercial
                    objectives."
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid #C9A961",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#C9A961",
                          fontSize: "10px",
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
                          fontSize: "12px",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                        }}
                      >
                        NS & Partners
                      </div>
                      <div
                        style={{
                          color: "#666",
                          fontSize: "11px",
                          marginTop: "2px",
                        }}
                      >
                        Firm Philosophy
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────────── */}
      <section
        style={{
          background: "#070707",
          padding: "100px 24px",
          borderTop: "1px solid rgba(201,169,97,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#C9A961",
                  }}
                />
                <span
                  style={{
                    color: "#C9A961",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Foundation
                </span>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#C9A961",
                  }}
                />
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Core Values
              </h2>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2px",
            }}
          >
            {coreValues.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.1}>
                <div
                  style={{
                    padding: "48px 32px",
                    background: "#0d0d0d",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderBottomColor = "#C9A961";
                    el.style.background = "#111";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderBottomColor = "transparent";
                    el.style.background = "#0d0d0d";
                  }}
                >
                  <div style={{ color: "#C9A961", marginBottom: "20px" }}>
                    {val.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "12px",
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    style={{ color: "#888", fontSize: "13px", lineHeight: 1.8 }}
                  >
                    {val.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRACTICE HIGHLIGHTS ──────────────────────────────── */}
      <section
        style={{
          background: "#000",
          padding: "100px 24px",
          borderTop: "1px solid rgba(201,169,97,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "24px",
                marginBottom: "56px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "#C9A961",
                    }}
                  />
                  <span
                    style={{
                      color: "#C9A961",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    What We Do
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 48px)",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  Practice Areas
                </h2>
              </div>
              <Link
                to="/practice-areas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#C9A961",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(201,169,97,0.4)",
                  paddingBottom: "4px",
                }}
              >
                View All Areas <FiArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <style>{`
            .practice-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
            @media (max-width: 700px) { .practice-grid { grid-template-columns: 1fr; } }
            @media (min-width: 701px) and (max-width: 1024px) { .practice-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
          <div className="practice-grid">
            {practiceHighlights.map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.08}>
                <Link
                  to="/practice-areas"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      padding: "40px 32px",
                      background: "#000",
                      transition: "background 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      borderRight: "1px solid rgba(201,169,97,0.12)",
                      borderBottom: "1px solid rgba(201,169,97,0.12)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "#0d0d0d";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "#000";
                    }}
                  >
                    <div
                      style={{
                        fontSize: "48px",
                        fontFamily: "Cormorant Garamond, serif",
                        color: "#C9A961",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "20px",
                      }}
                    >
                      {item.num}
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#999",
                        fontSize: "12px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.desc}
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "24px",
                        right: "24px",
                        color: "rgba(201,169,97,0.4)",
                      }}
                    >
                      <FiArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP TEASER ────────────────────────────────── */}
      <section
        style={{
          background: "#070707",
          padding: "100px 24px",
          borderTop: "1px solid rgba(201,169,97,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#C9A961",
                  }}
                />
                <span
                  style={{
                    color: "#C9A961",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Leadership
                </span>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#C9A961",
                  }}
                />
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Meet the Partners
              </h2>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  maxWidth: "480px",
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Two accomplished advocates whose combined expertise spans the
                full spectrum of legal practice in India.
              </p>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {[
              {
                name: "Nikhil Mandhotra",
                title: "Founding Partner",
                desc: "Specialises in IPR, Property Laws, Consumer Law, Corporate Law, Banking, Labour, GST and Real Estate.",
              },
              {
                name: "Sujeet Kumar",
                title: "Partner",
                desc: "Specialises in Criminal Laws, Commercial Arbitrations, IPR, Corporate Law, Banking, Labour and GST.",
              },
            ].map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.15}>
                <Link
                  to="/leadership"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      padding: "48px 40px",
                      background: "#0d0d0d",
                      borderBottom: "2px solid transparent",
                      transition: "all 0.3s ease",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderBottomColor = "#C9A961";
                      el.style.background = "#111";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderBottomColor = "transparent";
                      el.style.background = "#0d0d0d";
                    }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        border: "2px solid rgba(201,169,97,0.4)",
                        marginBottom: "24px",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={partnerImages[partner.name]}
                        alt={partner.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "6px",
                      }}
                    >
                      {partner.name}
                    </h3>
                    <p
                      style={{
                        color: "#C9A961",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                      }}
                    >
                      {partner.title}
                    </p>
                    <p
                      style={{
                        color: "#888",
                        fontSize: "13px",
                        lineHeight: 1.8,
                        marginBottom: "24px",
                      }}
                    >
                      {partner.desc}
                    </p>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "rgba(201,169,97,0.7)",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      View Profile <FiArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #050505 100%)",
          borderTop: "1px solid rgba(201,169,97,0.2)",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <AnimatedSection>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{ width: "40px", height: "1px", background: "#C9A961" }}
              />
              <span
                style={{
                  color: "#C9A961",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </span>
              <div
                style={{ width: "40px", height: "1px", background: "#C9A961" }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Ready to Discuss Your Matter?
            </h2>
            <p
              style={{
                color: "#888",
                fontSize: "14px",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              Our team is ready to provide strategic, practical, and
              results-oriented legal counsel. Reach out to schedule a
              consultation.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 36px",
                  background: "linear-gradient(135deg, #C9A961, #A8894A)",
                  color: "#000",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 30px rgba(201,169,97,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                Schedule Consultation <FiArrowRight size={14} />
              </Link>
              <a
                href="tel:+918091701723"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px 35px",
                  background: "transparent",
                  border: "1px solid rgba(201,169,97,0.4)",
                  color: "#C9A961",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#C9A961";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,169,97,0.4)";
                }}
              >
                +91 80917 01723
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
}
