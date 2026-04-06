import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";
import { offices } from "../data";

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0d0d0d",
  border: "1px solid rgba(201,169,97,0.2)",
  color: "#e5e5e5",
  padding: "14px 18px",
  fontSize: "13px",
  fontFamily: "Montserrat, sans-serif",
  outline: "none",
  transition: "border-color 0.3s ease",
  appearance: "none",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production this would POST to a backend
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          C
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
              Reach Out
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
            Contact Us
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
              maxWidth: "540px",
              lineHeight: 1.8,
            }}
          >
            We are available for consultations at our offices in New Delhi,
            Dehradun and Himachal Pradesh, or reach us directly by phone or
            email.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT DETAILS + FORM ─────────────────────────── */}
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
            {/* Left — Contact Info */}
            <div>
              <AnimatedSection>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "32px",
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
                    Contact Information
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div style={{ marginBottom: "40px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        border: "1px solid rgba(201,169,97,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <FiPhone size={16} color="#C9A961" />
                    </div>
                    <div>
                      <div
                        style={{
                          color: "#C9A961",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          marginBottom: "6px",
                        }}
                      >
                        Phone
                      </div>
                      <a
                        href="tel:+918091701723"
                        style={{
                          color: "#e5e5e5",
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#C9A961")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#e5e5e5")
                        }
                      >
                        +91 80917 01723
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        border: "1px solid rgba(201,169,97,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <FiMail size={16} color="#C9A961" />
                    </div>
                    <div>
                      <div
                        style={{
                          color: "#C9A961",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          marginBottom: "6px",
                        }}
                      >
                        Email
                      </div>
                      <a
                        href="mailto:mandhotranikhil@gmail.com"
                        style={{
                          color: "#e5e5e5",
                          textDecoration: "none",
                          fontSize: "14px",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#C9A961")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#e5e5e5")
                        }
                      >
                        mandhotranikhil@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Offices */}
              <AnimatedSection delay={0.2}>
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
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Our Offices
                  </span>
                </div>
              </AnimatedSection>

              <div style={{ display: "grid", gap: "16px" }}>
                {offices.map((office, i) => (
                  <AnimatedSection key={office.city} delay={0.25 + i * 0.08}>
                    <div
                      style={{
                        padding: "24px",
                        border: "1px solid rgba(201,169,97,0.15)",
                        background: "rgba(201,169,97,0.02)",
                        borderLeft: "2px solid rgba(201,169,97,0.4)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderLeftColor = "#C9A961";
                        el.style.background = "rgba(201,169,97,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderLeftColor = "rgba(201,169,97,0.4)";
                        el.style.background = "rgba(201,169,97,0.02)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <FiMapPin size={13} color="#C9A961" />
                        <span
                          style={{
                            color: "#C9A961",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                          }}
                        >
                          {office.city}
                        </span>
                      </div>
                      {office.address.map((line) => (
                        <div
                          key={line}
                          style={{
                            color: "#999",
                            fontSize: "13px",
                            lineHeight: 1.7,
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <AnimatedSection delay={0.15}>
              <div
                style={{
                  padding: "48px",
                  border: "1px solid rgba(201,169,97,0.15)",
                  background: "rgba(201,169,97,0.01)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "48px",
                    width: "80px",
                    height: "2px",
                    background: "#C9A961",
                  }}
                />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "40px 0" }}
                  >
                    <FiCheckCircle
                      size={48}
                      color="#C9A961"
                      style={{ marginBottom: "24px" }}
                    />
                    <h3
                      style={{
                        fontSize: "28px",
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "12px",
                      }}
                    >
                      Message Received
                    </h3>
                    <p
                      style={{
                        color: "#999",
                        fontSize: "14px",
                        lineHeight: 1.8,
                      }}
                    >
                      Thank you for reaching out. A member of our team will
                      contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3
                      style={{
                        fontSize: "28px",
                        fontFamily: "Cormorant Garamond, serif",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "8px",
                      }}
                    >
                      Send a Message
                    </h3>
                    <p
                      style={{
                        color: "#777",
                        fontSize: "13px",
                        marginBottom: "32px",
                      }}
                    >
                      We will respond within 1 business day.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "16px",
                        }}
                      >
                        <div>
                          <label
                            style={{
                              display: "block",
                              color: "#C9A961",
                              fontSize: "9px",
                              fontWeight: 600,
                              letterSpacing: "0.25em",
                              textTransform: "uppercase",
                              marginBottom: "8px",
                            }}
                          >
                            Full Name *
                          </label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            style={{
                              ...inputStyle,
                              borderColor:
                                focused === "name"
                                  ? "#C9A961"
                                  : "rgba(201,169,97,0.2)",
                            }}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                          />
                        </div>
                        <div>
                          <label
                            style={{
                              display: "block",
                              color: "#C9A961",
                              fontSize: "9px",
                              fontWeight: 600,
                              letterSpacing: "0.25em",
                              textTransform: "uppercase",
                              marginBottom: "8px",
                            }}
                          >
                            Email *
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your email"
                            style={{
                              ...inputStyle,
                              borderColor:
                                focused === "email"
                                  ? "#C9A961"
                                  : "rgba(201,169,97,0.2)",
                            }}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            color: "#C9A961",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          }}
                        >
                          Phone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          style={{
                            ...inputStyle,
                            borderColor:
                              focused === "phone"
                                ? "#C9A961"
                                : "rgba(201,169,97,0.2)",
                          }}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            color: "#C9A961",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          }}
                        >
                          Area of Law
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          style={{
                            ...inputStyle,
                            borderColor:
                              focused === "subject"
                                ? "#C9A961"
                                : "rgba(201,169,97,0.2)",
                            cursor: "pointer",
                          }}
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="" style={{ background: "#0d0d0d" }}>
                            Select a practice area
                          </option>
                          <option
                            value="dispute"
                            style={{ background: "#0d0d0d" }}
                          >
                            Dispute Resolution & Litigation
                          </option>
                          <option value="ip" style={{ background: "#0d0d0d" }}>
                            Intellectual Property
                          </option>
                          <option value="gst" style={{ background: "#0d0d0d" }}>
                            Goods and Service Tax
                          </option>
                          <option
                            value="consumer"
                            style={{ background: "#0d0d0d" }}
                          >
                            Consumer & Insurance
                          </option>
                          <option
                            value="corporate"
                            style={{ background: "#0d0d0d" }}
                          >
                            Corporate & Commercial
                          </option>
                          <option
                            value="realestate"
                            style={{ background: "#0d0d0d" }}
                          >
                            Real Estate
                          </option>
                          <option
                            value="family"
                            style={{ background: "#0d0d0d" }}
                          >
                            Family & Matrimonial
                          </option>
                          <option
                            value="criminal"
                            style={{ background: "#0d0d0d" }}
                          >
                            Criminal Litigation
                          </option>
                          <option
                            value="banking"
                            style={{ background: "#0d0d0d" }}
                          >
                            Banking & Finance
                          </option>
                          <option
                            value="arbitration"
                            style={{ background: "#0d0d0d" }}
                          >
                            Arbitration
                          </option>
                          <option
                            value="startup"
                            style={{ background: "#0d0d0d" }}
                          >
                            Start-up Solutions
                          </option>
                          <option
                            value="taxation"
                            style={{ background: "#0d0d0d" }}
                          >
                            Taxation
                          </option>
                          <option
                            value="other"
                            style={{ background: "#0d0d0d" }}
                          >
                            Other
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          style={{
                            display: "block",
                            color: "#C9A961",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          }}
                        >
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Briefly describe your matter..."
                          style={{
                            ...inputStyle,
                            resize: "vertical",
                            borderColor:
                              focused === "message"
                                ? "#C9A961"
                                : "rgba(201,169,97,0.2)",
                          }}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          padding: "14px 32px",
                          background:
                            "linear-gradient(135deg, #C9A961, #A8894A)",
                          border: "none",
                          color: "#000",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          fontFamily: "Montserrat, sans-serif",
                          transition: "all 0.3s ease",
                          width: "100%",
                          marginTop: "8px",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform =
                            "translateY(-2px)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 10px 30px rgba(201,169,97,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "";
                          (e.currentTarget as HTMLElement).style.boxShadow = "";
                        }}
                      >
                        Send Message <FiSend size={14} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── OFFICES GRID (visual) ───────────────────────────── */}
      <section
        style={{
          background: "#070707",
          padding: "80px 24px",
          borderTop: "1px solid rgba(201,169,97,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                  Locations
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
                  fontSize: "clamp(26px, 3.5vw, 42px)",
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Our Offices
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
            {offices.map((office, i) => (
              <AnimatedSection key={office.city} delay={i * 0.1}>
                <div
                  style={{
                    padding: "48px 32px",
                    background: "#0d0d0d",
                    borderTop: "2px solid rgba(201,169,97,0.3)",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderTopColor = "#C9A961";
                    el.style.background = "#111";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderTopColor = "rgba(201,169,97,0.3)";
                    el.style.background = "#0d0d0d";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <FiMapPin size={16} color="#C9A961" />
                    <h3
                      style={{
                        color: "#C9A961",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {office.city}
                    </h3>
                  </div>
                  {office.address.map((line) => (
                    <div
                      key={line}
                      style={{
                        color: "#999",
                        fontSize: "13px",
                        lineHeight: 1.8,
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
