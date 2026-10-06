import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="page-header">
        <span className="page-category-tag">OFFICIAL EDITORIAL DESK</span>
        <h1 className="page-title">{language === "hi" ? "आधिकारिक संपर्क एवं पता" : "Official Contact & Correspondence"}</h1>
        <p className="page-desc">
          {language === "hi"
            ? "संपादकीय ब्यूरो, विधिक पत्राचार एवं आधिकारिक संपर्क। नीतिगत सुरक्षा कारणों से कर्मचारियों के व्यक्तिगत फोन नंबर पूर्णतः प्रतिबंधित हैं।"
            : "Editorial inquiries, statutory notice submissions, and legal communications. Under organizational security protocols, personal phone numbers are strictly prohibited."}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div style={{ background: "#ffffff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "var(--primary)" }}>
            {language === "hi" ? "पंजीकृत कार्यालय एवं संपादकीय डेस्क" : "Registered Editorial Office"}
          </h3>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-body)" }}>
            <strong>Medical Practice Watch</strong><br />
            Central Editorial Bureau<br />
            Press Arcade, 4th Floor, MP Nagar Zone-1<br />
            Bhopal, Madhya Pradesh 462011, India
          </p>
        </div>

        <div style={{ background: "#ffffff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "var(--navy)" }}>
            {language === "hi" ? "आधिकारिक ई-मेल संपर्क" : "Official Email Desks"}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.9rem" }}>
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>General Editorial & Investigation Inquiries:</span>
              <code style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 700 }}>editorial@medicalpracticewatch.org</code>
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Statutory Grievance Redressal Desk:</span>
              <code style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 700 }}>grievance@medicalpracticewatch.org</code>
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Notice & Rebuttal Document Submissions:</span>
              <code style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 700 }}>replies@medicalpracticewatch.org</code>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem", background: "#fef2f2", border: "1px solid #fecaca", padding: "1.25rem", color: "#991b1b", fontSize: "0.85rem" }}>
        <strong>Security & Protocol Notice:</strong> MPW staff members do not provide personal mobile numbers or conduct unrecorded telephonic interviews regarding ongoing investigations. All communication must occur through official recorded email or physical written dispatch.
      </div>
    </div>
  );
};

export default Contact;
