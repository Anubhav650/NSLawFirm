import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { practiceAreas } from "../data";

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AccordionCard({
  area,
  index,
}: {
  area: (typeof practiceAreas)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.05}>
      <div
        style={{
          borderBottom: "1px solid rgba(201,169,97,0.12)",
          transition: "background 0.3s ease",
          background: open ? "rgba(201,169,97,0.03)" : "transparent",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "28px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ fontSize: "22px", flexShrink: 0 }}>{area.icon}</span>
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: open ? "#C9A961" : "#e5e5e5",
                  transition: "color 0.3s",
                }}
              >
                {area.title}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: "#C9A961", flexShrink: 0 }}
          >
            <FiChevronDown size={20} />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ paddingBottom: "28px", paddingLeft: "42px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "#C9A961",
                    marginBottom: "16px",
                  }}
                />
                <p
                  style={{
                    color: "#999",
                    fontSize: "13.5px",
                    lineHeight: 1.9,
                    maxWidth: "700px",
                  }}
                >
                  {area.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function PracticeAreas() {
  const [activeTab, setActiveTab] = useState<"all" | "dispute" | "corporate">(
    "all",
  );

  const disputeAreas = practiceAreas.filter((a) => a.category === "dispute");
  const corporateAreas = practiceAreas.filter(
    (a) => a.category === "corporate",
  );
  const filteredAreas =
    activeTab === "all"
      ? practiceAreas
      : practiceAreas.filter((a) => a.category === activeTab);

  return (
    <PageWrapper>
      <SEO
        title="Practice Areas"
        description="NS & Partners covers 19+ practice areas including Dispute Resolution, Intellectual Property, Corporate Advisory, Real Estate, Criminal Litigation, Banking & Finance, GST, and Start-up Solutions across India."
        canonical="/practice-areas"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "NS & Partners Practice Areas",
          url: "https://nspartners.in/practice-areas",
          itemListElement: practiceAreas.map((area, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: area.title,
            description: area.description,
          })),
        }}
      />
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
            right: "-60px",
            bottom: "-80px",
            fontSize: "360px",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgba(201,169,97,0.03)",
            fontWeight: 700,
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          P
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
              What We Do
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
            Practice Areas
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
            Comprehensive legal services spanning dispute resolution,
            litigation, and corporate advisory across 19 practice areas.
          </motion.p>
        </div>
      </section>

      {/* ─── TWO CATEGORIES OVERVIEW ────────────────────────── */}
      <section
        style={{
          background: "#070707",
          padding: "64px 24px",
          borderBottom: "1px solid rgba(201,169,97,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2px",
            }}
          >
            <AnimatedSection>
              <div
                style={{
                  padding: "40px",
                  background: "#0d0d0d",
                  borderTop: "2px solid #C9A961",
                }}
              >
                <div
                  style={{
                    color: "#C9A961",
                    fontSize: "32px",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Dispute Resolution & Litigation
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Courts, Tribunals, Arbitrations, Consumer Forums
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div
                style={{
                  padding: "40px",
                  background: "#0d0d0d",
                  borderTop: "2px solid rgba(201,169,97,0.4)",
                }}
              >
                <div
                  style={{
                    color: "#C9A961",
                    fontSize: "32px",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Corporate Advisory
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Compliance, Transactions, Start-ups, Taxation
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FILTER TABS + ACCORDION ────────────────────────── */}
      <section style={{ background: "#000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Filter tabs */}
          <AnimatedSection>
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "56px",
                flexWrap: "wrap",
              }}
            >
              {[
                { key: "all", label: "All Practice Areas" },
                { key: "dispute", label: "Dispute Resolution & Litigation" },
                { key: "corporate", label: "Corporate Advisory" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  style={{
                    padding: "10px 20px",
                    background:
                      activeTab === tab.key ? "#C9A961" : "transparent",
                    border: "1px solid",
                    borderColor:
                      activeTab === tab.key
                        ? "#C9A961"
                        : "rgba(201,169,97,0.3)",
                    color: activeTab === tab.key ? "#000" : "#C9A961",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Dispute Resolution Section */}
          {(activeTab === "all" || activeTab === "dispute") && (
            <div style={{ marginBottom: activeTab === "all" ? "72px" : 0 }}>
              {activeTab === "all" && (
                <AnimatedSection>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "1px",
                        background: "#C9A961",
                      }}
                    />
                    <h2
                      style={{
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Dispute Resolution & Litigation
                    </h2>
                  </div>
                  <div
                    style={{
                      width: "calc(40px + 16px + 280px)",
                      height: "1px",
                      background: "rgba(201,169,97,0.2)",
                      marginBottom: "8px",
                      marginLeft: 0,
                    }}
                  />
                </AnimatedSection>
              )}
              {(activeTab === "all" ? disputeAreas : filteredAreas).map(
                (area, i) => (
                  <AccordionCard key={area.id} area={area} index={i} />
                ),
              )}
            </div>
          )}

          {/* Corporate Advisory Section */}
          {(activeTab === "all" || activeTab === "corporate") && (
            <div>
              {activeTab === "all" && (
                <AnimatedSection>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "8px",
                      marginTop: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "1px",
                        background: "#C9A961",
                      }}
                    />
                    <h2
                      style={{
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Corporate Advisory
                    </h2>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(201,169,97,0.2)",
                      marginBottom: "8px",
                    }}
                  />
                </AnimatedSection>
              )}
              {(activeTab === "all" ? corporateAreas : filteredAreas).map(
                (area, i) => (
                  <AccordionCard key={area.id} area={area} index={i} />
                ),
              )}
            </div>
          )}
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
              Need Legal Counsel?
            </h2>
            <p
              style={{
                color: "#888",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Our team is ready to provide strategic, practical, and
              results-oriented advice across all practice areas.
            </p>
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
              }}
            >
              Schedule a Consultation <FiArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
}
