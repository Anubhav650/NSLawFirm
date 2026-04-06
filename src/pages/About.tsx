import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";

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

const coreValues = [
  {
    title: "Integrity & Ethics",
    desc: "Every mandate is handled with unwavering professional ethics, complete transparency and accountability to our clients and the courts.",
  },
  {
    title: "Strategic Advocacy",
    desc: "We craft precision-engineered legal strategies aligned with each client's specific legal and commercial objectives — never a one-size-fits-all approach.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Your interests are paramount. We listen deeply, advise candidly and advocate with complete commitment to your outcomes.",
  },
  {
    title: "Excellence in Litigation",
    desc: "Proven track record representing clients across the Supreme Court, High Courts, and a wide range of specialist tribunals and forums nationwide.",
  },
];

export default function About() {
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
          NS
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
              About the Firm
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
            About NS & Partners
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
            A modern legal practice committed to delivering strategic,
            business-oriented and ethically grounded legal services across
            India.
          </motion.p>
        </div>
      </section>

      {/* ─── FIRM OVERVIEW ──────────────────────────────────── */}
      <section style={{ background: "#000", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <AnimatedSection>
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
                  Our Story
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Firm Overview & Philosophy
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  background: "#C9A961",
                  marginBottom: "28px",
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
                NS & Partners is a modern legal practice committed to delivering
                strategic, business-oriented and ethically grounded legal
                services. The firm combines litigation expertise with advisory
                capabilities across multiple sectors, providing clients with
                practical solutions tailored to their legal and commercial
                objectives.
              </p>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "14px",
                  lineHeight: 1.9,
                  marginBottom: "20px",
                }}
              >
                With a network of professionals and associates across India, the
                firm provides representation and advisory services in courts,
                tribunals, and regulatory forums. The firm's philosophy is
                rooted in integrity, professionalism, and client-focused
                advocacy.
              </p>
              <p style={{ color: "#aaa", fontSize: "14px", lineHeight: 1.9 }}>
                We believe that legal counsel should be practical, accessible,
                and outcome-oriented — not confined to academic abstractions but
                grounded in the commercial realities our clients face daily.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div
                style={{
                  padding: "48px",
                  border: "1px solid rgba(201,169,97,0.2)",
                  background: "rgba(201,169,97,0.02)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "48px",
                    width: "60px",
                    height: "2px",
                    background: "#C9A961",
                  }}
                />
                <blockquote
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontFamily: "Cormorant Garamond, serif",
                    fontStyle: "italic",
                    color: "#e5e5e5",
                    lineHeight: 1.5,
                    marginBottom: "32px",
                  }}
                >
                  "Practical solutions tailored to legal and commercial
                  objectives."
                </blockquote>
                <div
                  style={{
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(201,169,97,0.15)",
                  }}
                >
                  <div
                    style={{
                      color: "#C9A961",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "20px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Our Approach
                  </div>
                  {[
                    "Multi-disciplinary expertise across 19+ practice areas",
                    "Pan-India presence across courts and tribunals",
                    "Business-oriented, results-driven counsel",
                    "Transparent, client-first communication",
                  ].map((point) => (
                    <div
                      key={point}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "14px",
                      }}
                    >
                      <FiCheckCircle
                        size={14}
                        color="#C9A961"
                        style={{ marginTop: "2px", flexShrink: 0 }}
                      />
                      <span
                        style={{
                          color: "#999",
                          fontSize: "13px",
                          lineHeight: 1.6,
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VALUES ───────────────────────────────── */}
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
                  What Guides Us
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
                Our Core Values
              </h2>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2px",
            }}
          >
            {coreValues.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.1}>
                <div
                  style={{
                    padding: "48px 32px",
                    background: "#0d0d0d",
                    height: "100%",
                    borderBottom: "2px solid rgba(201,169,97,0)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderBottomColor = "#C9A961";
                    el.style.background = "#111";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderBottomColor = "rgba(201,169,97,0)";
                    el.style.background = "#0d0d0d";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      background: "#C9A961",
                      marginBottom: "24px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "20px",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "16px",
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    style={{ color: "#888", fontSize: "13px", lineHeight: 1.9 }}
                  >
                    {val.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NETWORK & PRESENCE ─────────────────────────────── */}
      <section
        style={{
          background: "#000",
          padding: "100px 24px",
          borderTop: "1px solid rgba(201,169,97,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <AnimatedSection>
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
                  Our Reach
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Network & Presence
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  background: "#C9A961",
                  marginBottom: "28px",
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
                With offices in Himachal Pradesh, New Delhi, and Dehradun, NS &
                Partners serves clients across the full spectrum of India's
                legal geography. Our team of professionals and associates
                enables seamless representation before courts and forums
                nationwide.
              </p>
              <p style={{ color: "#aaa", fontSize: "14px", lineHeight: 1.9 }}>
                We appear before the Supreme Court of India, all major High
                Courts, the National Company Law Tribunal, Debt Recovery
                Tribunals, Consumer Forums, GST Appellate Authorities, Trademark
                Registry, Labour Courts, and numerous other specialist forums.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div style={{ display: "grid", gap: "2px" }}>
                {[
                  {
                    label: "Courts & Forums",
                    items: [
                      "Supreme Court of India",
                      "High Courts",
                      "District Courts & Trial Courts",
                    ],
                  },
                  {
                    label: "Specialist Tribunals",
                    items: [
                      "NCLT / NCLAT",
                      "DRT / DRAT",
                      "NCDRC / Consumer Forums",
                      "GST Tribunals (GSTAT)",
                      "ITAT",
                      "Labour Courts",
                    ],
                  },
                  {
                    label: "Regulatory Bodies",
                    items: [
                      "Trademark Registry",
                      "SEBI",
                      "FSSAI",
                      "Other Regulatory Authorities",
                    ],
                  },
                ].map((group) => (
                  <div
                    key={group.label}
                    style={{
                      padding: "32px",
                      background: "#0d0d0d",
                      borderLeft: "2px solid rgba(201,169,97,0.3)",
                      transition: "border-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderLeftColor =
                        "#C9A961")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderLeftColor =
                        "rgba(201,169,97,0.3)")
                    }
                  >
                    <div
                      style={{
                        color: "#C9A961",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "14px",
                      }}
                    >
                      {group.label}
                    </div>
                    {group.items.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "8px",
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
                        <span style={{ color: "#999", fontSize: "13px" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
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
              Get to Know Our Team
            </h2>
            <p
              style={{
                color: "#888",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Meet the partners who lead the firm and drive its strategic
              vision.
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
                to="/leadership"
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
                Meet Our Partners <FiArrowRight size={14} />
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
