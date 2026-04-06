import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { partners } from "../data";
import nikhilImg from "../assets/Nikhil Mandhotra.jpg";
import sujeetImg from "../assets/Sujeet Kumar.jpg";

const partnerImages: Record<string, string> = {
  "Nikhil Mandhotra": nikhilImg,
  "Sujeet Kumar": sujeetImg,
};

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

export default function Leadership() {
  return (
    <PageWrapper>
      {/* ─── PAGE HEADER ────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #000 0%, #0d0d0d 100%)",
          padding: "160px 24px 80px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(201,169,97,0.15)",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            bottom: "-80px",
            fontSize: "360px",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgba(201,169,97,0.03)",
            fontWeight: 700,
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          L
        </div>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
              The Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Leadership
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              transformOrigin: "left",
              width: "80px",
              height: "2px",
              background: "#C9A961",
              marginBottom: "24px",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              color: "#aaa",
              fontSize: "15px",
              maxWidth: "600px",
              lineHeight: 1.8,
            }}
          >
            Meet the advocates who lead NS & Partners — combining deep
            expertise, strategic thinking, and unwavering commitment to our
            clients.
          </motion.p>
        </div>
      </section>

      {/* ─── PARTNER PROFILES ───────────────────────────────── */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "80px",
                  alignItems: "start",
                  marginBottom: i < partners.length - 1 ? "100px" : 0,
                  paddingBottom: i < partners.length - 1 ? "100px" : 0,
                  borderBottom:
                    i < partners.length - 1
                      ? "1px solid rgba(201,169,97,0.1)"
                      : "none",
                }}
              >
                {/* Left — Photo & Name */}
                <div style={{ position: "sticky", top: "100px" }}>
                  <div
                    style={{
                      width: "220px",
                      height: "220px",
                      borderRadius: "50%",
                      border: "2px solid rgba(201,169,97,0.4)",
                      marginBottom: "32px",
                      position: "relative",
                      overflow: "hidden",
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

                  <h2
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "8px",
                    }}
                  >
                    {partner.name}
                  </h2>
                  <p
                    style={{
                      color: "#C9A961",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    {partner.title}
                  </p>
                  <p
                    style={{
                      color: "#777",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      marginBottom: "32px",
                    }}
                  >
                    {partner.education}
                  </p>

                  {/* Courts */}
                  <div
                    style={{
                      padding: "24px",
                      border: "1px solid rgba(201,169,97,0.15)",
                      background: "rgba(201,169,97,0.02)",
                    }}
                  >
                    <div
                      style={{
                        color: "#C9A961",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                      }}
                    >
                      Appears Before
                    </div>
                    {partner.courts.map((court) => (
                      <div
                        key={court}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "#C9A961",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ color: "#999", fontSize: "12px" }}>
                          {court}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — Bio & Specialisations */}
                <div>
                  {partner.bio.map((para, pi) => (
                    <p
                      key={pi}
                      style={{
                        color: "#aaa",
                        fontSize: "14px",
                        lineHeight: 1.9,
                        marginBottom: "20px",
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  <div style={{ marginTop: "40px" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "28px",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "1px",
                          background: "#C9A961",
                        }}
                      />
                      <span
                        style={{
                          color: "#C9A961",
                          fontSize: "10px",
                          fontWeight: 500,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                        }}
                      >
                        Areas of Specialisation
                      </span>
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                    >
                      {partner.specializations.map((spec) => (
                        <span
                          key={spec}
                          style={{
                            padding: "7px 16px",
                            border: "1px solid rgba(201,169,97,0.3)",
                            color: "#C9A961",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            background: "rgba(201,169,97,0.04)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "rgba(201,169,97,0.12)";
                            el.style.borderColor = "#C9A961";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "rgba(201,169,97,0.04)";
                            el.style.borderColor = "rgba(201,169,97,0.3)";
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section
        style={{
          background: "#050505",
          padding: "80px 24px",
          borderTop: "1px solid rgba(201,169,97,0.15)",
          textAlign: "center",
        }}
      >
        <AnimatedSection>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 38px)",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Work With Our Team
            </h2>
            <p
              style={{
                color: "#888",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Our partners are ready to provide strategic, practical legal
              counsel tailored to your needs.
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
                  padding: "13px 32px",
                  background: "linear-gradient(135deg, #C9A961, #A8894A)",
                  color: "#000",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Get In Touch <FiArrowRight size={14} />
              </Link>
              <Link
                to="/practice-areas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 31px",
                  background: "transparent",
                  border: "1px solid rgba(201,169,97,0.4)",
                  color: "#C9A961",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Practice Areas
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
}
