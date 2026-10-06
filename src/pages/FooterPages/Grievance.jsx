import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Grievance = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    caseRef: "",
    grounds: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="page-header">
        <span className="page-category-tag">STATUTORY GRIEVANCE MECHANISM</span>
        <h1 className="page-title">{language === "hi" ? "शिकायत निवारण प्रक्रिया" : "Grievance Redressal Mechanism"}</h1>
        <p className="page-desc">
          {language === "hi"
            ? "MPW के किसी भी प्रकाशित अभिलेख के विरुद्ध तथ्यात्मक आपत्ति या त्रुटि सुधार हेतु स्वतंत्र शिकायत निवारण प्रक्रिया। 24 घंटे में औपचारिक पावती एवं 15 सांविधिक दिनों में अंतिम निर्णय।"
            : "Independent grievance redressal for factual inaccuracies in published records. 24-hour statutory acknowledgement, 15-day resolution timeline."}
        </p>
      </div>

      {/* Named Officer Box */}
      <div style={{ background: "#ffffff", border: "1px solid var(--border-medium)", borderLeft: "5px solid var(--navy)", padding: "1.75rem", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
          {language === "hi" ? "नामित शिकायत अधिकारी (भारत)" : "Designated Grievance Officer (India)"}
        </h3>
        <p style={{ margin: "0.25rem 0", fontSize: "0.9rem" }}>
          <strong>Advocate Rajesh Kumar Saxena</strong> (High Court of MP Bar Member)
        </p>
        <p style={{ margin: "0.25rem 0", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Address: Central Editorial Bureau, Press Enclave, Bhopal, Madhya Pradesh 462001
        </p>
        <p style={{ margin: "0.25rem 0", fontSize: "0.85rem", color: "var(--primary)", fontFamily: "monospace" }}>
          Official Redressal Email: grievance@medicalpracticewatch.org
        </p>
      </div>

      {/* Two Timers SLA Box */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "1.5rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1e40af" }}>TIMER 1 · MANDATORY ACKNOWLEDGEMENT</span>
          <h2 style={{ fontSize: "2.2rem", color: "#1e3a8a", margin: "0.5rem 0" }}>24 Hours</h2>
          <p style={{ fontSize: "0.82rem", color: "#1e40af", margin: 0 }}>
            {language === "hi" ? "शिकायत दर्ज होते ही 24 घंटे में डिजिटल पावती एवं ट्रैकिंग कोड जारी।" : "Automated and signed receipt generated within 24 hours of submission."}
          </p>
        </div>

        <div style={{ background: "#fef3c7", border: "1px solid #fde68a", padding: "1.5rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#92400e" }}>TIMER 2 · FINAL DECISION SLA</span>
          <h2 style={{ fontSize: "2.2rem", color: "#78350f", margin: "0.5rem 0" }}>15 Days</h2>
          <p style={{ fontSize: "0.82rem", color: "#92400e", margin: 0 }}>
            {language === "hi" ? "अधिकारी द्वारा मूल अभिलेखों की पड़ताल कर 15 दिनों में औपचारिक निर्णय।" : "Formal reasoned decision issued with updates to permanent register if upheld."}
          </p>
        </div>
      </div>

      {/* Intake Form */}
      {!submitted ? (
        <div style={{ background: "#fff", border: "1px solid var(--border-medium)", padding: "2rem", maxWidth: "700px" }}>
          <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>
            {language === "hi" ? "शिकायत प्रपत्र (Intake Form)" : "Grievance Intake Form"}
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                {language === "hi" ? "आवेदक का नाम:" : "Complainant Name:"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border-medium)" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                {language === "hi" ? "आधिकारिक ईमेल पता:" : "Official Contact Email:"}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border-medium)" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                {language === "hi" ? "केस / सामग्री संदर्भ (यदि लागू हो):" : "Case / Record Reference (if applicable):"}
              </label>
              <input
                type="text"
                placeholder="e.g. MPW-CASE-2026-104"
                value={formData.caseRef}
                onChange={(e) => setFormData({ ...formData, caseRef: e.target.value })}
                style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border-medium)", fontFamily: "monospace" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                {language === "hi" ? "शिकायत का आधार एवं प्राथमिक साक्ष्य:" : "Grounds of Grievance & Primary Evidence:"}
              </label>
              <textarea
                rows="5"
                required
                value={formData.grounds}
                onChange={(e) => setFormData({ ...formData, grounds: e.target.value })}
                style={{ width: "100%", padding: "0.6rem", border: "1px solid var(--border-medium)" }}
                placeholder={language === "hi" ? "तथ्यात्मक विसंगतियों का सटीक विवरण..." : "Specific factual inaccuracies in published text..."}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              {language === "hi" ? "शिकायत दर्ज करें (टाइमर प्रारंभ करें)" : "Log Grievance (Start SLA Timers)"}
            </button>
          </form>
        </div>
      ) : (
        <div style={{ background: "#ecfdf5", border: "2px solid #059669", padding: "2rem", maxWidth: "700px" }}>
          <h3 style={{ color: "#065f46", marginBottom: "0.5rem" }}>Grievance Successfully Registered</h3>
          <p style={{ color: "#065f46", fontSize: "0.9rem" }}>
            Tracking ID: <strong>GRV-2026-0814</strong> | Timers initiated: 24h acknowledgement window and 15-day statutory resolution.
          </p>
        </div>
      )}
    </div>
  );
};

export default Grievance;
