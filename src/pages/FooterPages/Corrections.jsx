import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { mockCorrections } from "../../data/mockData";

const Corrections = () => {
  const { language } = useLanguage();

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="page-header">
        <span className="page-category-tag">PERMANENT PUBLIC REGISTER</span>
        <h1 className="page-title">{language === "hi" ? "सुधार एवं संशोधन रजिस्टर" : "Public Register of Corrections & Withdrawals"}</h1>
        <p className="page-desc">
          {language === "hi"
            ? "MPW द्वारा प्रकाशित प्रत्येक संशोधन, तथ्य अद्यतन और वापसी का स्थायी, कालक्रमानुसार (Reverse-chronological) सार्वजनिक अभिलेख। कभी कोई यूआरएल नहीं हटाया जाता; सुधार होने पर पूर्व स्थिति, नवीन साक्ष्य और संशोधित स्थिति का स्पष्ट विवरण दर्ज होता है।"
            : "Permanent, immutable reverse-chronological register of every correction, factual clarification, and withdrawal. URLs are never deleted or redirected. Each entry details original report, new material, verification performed, and notification date."}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {mockCorrections.map((corr) => (
          <div key={corr.ref} style={{ background: "#ffffff", border: "1px solid var(--border-medium)", borderLeft: "5px solid var(--primary)", padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.85rem", background: "#f4f4f5", padding: "0.2rem 0.5rem" }}>
                  {corr.ref}
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--primary)", fontWeight: 700 }}>
                  Case: {corr.caseRef}
                </span>
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-light)", fontFamily: "monospace" }}>
                Date: {corr.date}
              </span>
            </div>

            <h3 style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>
              Matter: {corr.subject}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", background: "#fafafa", padding: "1.25rem", border: "1px solid var(--border-light)", marginBottom: "1.25rem" }}>
              <div>
                <strong style={{ fontSize: "0.8rem", color: "#991b1b", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                  1. What Was Originally Reported
                </strong>
                <p style={{ fontSize: "0.85rem", margin: 0, color: "var(--text-body)" }}>
                  {language === "hi" ? corr.originalReport_hi : corr.originalReport_en}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "0.8rem", color: "#065f46", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                  2. New Material Arrived
                </strong>
                <p style={{ fontSize: "0.85rem", margin: 0, color: "var(--text-body)" }}>
                  {language === "hi" ? corr.newMaterial_hi : corr.newMaterial_en}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "0.8rem", color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                  3. Verification Performed
                </strong>
                <p style={{ fontSize: "0.85rem", margin: 0, color: "var(--text-body)" }}>
                  {language === "hi" ? corr.verification_hi : corr.verification_en}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: "0.8rem", color: "var(--text-main)", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                  4. Outcome & Notification
                </strong>
                <p style={{ fontSize: "0.85rem", margin: 0, color: "var(--text-body)" }}>
                  New Status: <span className="badge badge-verified">{corr.newStatus}</span><br />
                  Subject Notified: <strong>{corr.notifiedDate}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corrections;
