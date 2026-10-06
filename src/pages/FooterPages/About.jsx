import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="page-header">
        <span className="page-category-tag">INSTITUTIONAL GOVERNANCE & CHARTER</span>
        <h1 className="page-title">{language === "hi" ? "हमारे बारे में — संस्थागत परिचय व प्रशासन" : "About Medical Practice Watch"}</h1>
        <p className="page-desc">
          {language === "hi"
            ? "मेडिकल प्रैक्टिस वॉच (MPW) एक गैर-लाभकारी, स्वतंत्र खोजी पत्रकारिता प्रकाशन है। हम किसी भी चिकित्सक, अस्पताल या शैक्षणिक संस्थान से न तो कोई शुल्क स्वीकार करते हैं और न ही कुछ बेचते हैं।"
            : "Medical Practice Watch (MPW) is an independent public interest journalistic publication. We sell nothing to practitioners and accept nothing from them."}
        </p>
      </div>

      {/* Zero Commercial Relationship Banner */}
      <div style={{ background: "#fbf2f2", border: "1px solid #f2d6d8", borderLeft: "5px solid var(--primary)", padding: "1.5rem", marginBottom: "2rem" }}>
        <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>
          {language === "hi" ? "व्यावसायिक स्वतंत्रता की स्पष्ट उद्घोषणा" : "Affirmation of Complete Commercial Non-Involvement"}
        </h3>
        <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.6 }}>
          {language === "hi"
            ? "MPW किसी भी चिकित्सक को मान्यता, प्रमाणीकरण या साख बैज नहीं बेचता है। हम किसी भी दवा निर्माता, अस्पताल समूह, निजी कॉलेज अथवा पैथोलॉजी लैब से कोई भी विज्ञापन, कॉर्पोरेट सीएसआर या अनुदान स्वीकार नहीं करते।"
            : "MPW sells no accreditation, badges, or directories to practitioners. We do not accept advertising, grants, or corporate CSR from pharmaceutical manufacturers, private medical institutions, or laboratory networks."}
        </p>
      </div>

      {/* Legal Entity & Registration */}
      <div style={{ background: "#ffffff", border: "1px solid var(--border-medium)", padding: "2rem", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          {language === "hi" ? "1. विधिक निकाय एवं पंजीकरण विवरण" : "1. Legal Entity & Statutory Registration"}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", fontSize: "0.9rem" }}>
          <div>
            <strong>Legal Status:</strong> Not-for-Profit Public Trust / Journalistic Society<br />
            <strong>PRGI Title Application:</strong> Filed under Press & Registration of Periodicals Act<br />
            <strong>Jurisdiction:</strong> Madhya Pradesh, India
          </div>
          <div>
            <strong>Registered Office:</strong> 4th Floor, Press Arcade, MP Nagar Zone-1, Bhopal 462011<br />
            <strong>Primary Canonical Domain:</strong> medicalpracticewatch.org<br />
            <strong>Mirror / Defensive Domain:</strong> medicalpracticewatch.in
          </div>
        </div>
      </div>

      {/* Governing Body with Independent Members */}
      <div style={{ background: "#ffffff", border: "1px solid var(--border-medium)", padding: "2rem", marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          {language === "hi" ? "2. संचालन मंडल (Governing Board)" : "2. Governing Board (Independent Members Marked)"}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ background: "#fafafa", padding: "1rem", border: "1px solid var(--border-light)" }}>
            <span style={{ fontSize: "0.7rem", background: "#059669", color: "#fff", padding: "0.15rem 0.4rem", fontWeight: 700 }}>
              INDEPENDENT TRUSTEE
            </span>
            <h4 style={{ margin: "0.5rem 0 0.2rem" }}>Justice (Retd.) Surendra Nath Gupta</h4>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-muted)" }}>Former High Court Judge | Ethics & Judicial Standards</p>
          </div>

          <div style={{ background: "#fafafa", padding: "1rem", border: "1px solid var(--border-light)" }}>
            <span style={{ fontSize: "0.7rem", background: "#059669", color: "#fff", padding: "0.15rem 0.4rem", fontWeight: 700 }}>
              INDEPENDENT TRUSTEE
            </span>
            <h4 style={{ margin: "0.5rem 0 0.2rem" }}>Prof. (Dr.) Manju Bhargava</h4>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-muted)" }}>Public Health Epidemiologist | Ex-Director, Institute of Health</p>
          </div>

          <div style={{ background: "#fafafa", padding: "1rem", border: "1px solid var(--border-light)" }}>
            <span style={{ fontSize: "0.7rem", background: "#374151", color: "#fff", padding: "0.15rem 0.4rem", fontWeight: 700 }}>
              EDITORIAL TRUSTEE
            </span>
            <h4 style={{ margin: "0.5rem 0 0.2rem" }}>Anand V. Sharma</h4>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-muted)" }}>Editor-in-Chief & Lead Investigator</p>
          </div>

          <div style={{ background: "#fafafa", padding: "1rem", border: "1px solid var(--border-light)" }}>
            <span style={{ fontSize: "0.7rem", background: "#059669", color: "#fff", padding: "0.15rem 0.4rem", fontWeight: 700 }}>
              INDEPENDENT TRUSTEE
            </span>
            <h4 style={{ margin: "0.5rem 0 0.2rem" }}>Devika Mukherjee</h4>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--text-muted)" }}>Constitutional Lawyer & Media Law Counsel</p>
          </div>
        </div>
      </div>

      {/* Refused-Funding List */}
      <div style={{ background: "#ffffff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "#b91c1c" }}>
          {language === "hi" ? "3. अस्वीकृत निधियों का स्थायी रजिस्टर (Refused-Funding Register)" : "3. Permanent Register of Refused Funding"}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
          All funding offers with potential conflicts of interest are formally recorded, rejected, and disclosed here.
        </p>
        <div className="records-table-wrapper">
          <table className="records-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Entity Name</th>
                <th>Nature of Offer</th>
                <th>Reason for Refusal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-08-10</td>
                <td>Apex Paramedical Institute Association</td>
                <td>Unrestricted Academic Grant (₹5,00,000)</td>
                <td>Member institutions currently under investigation for backdating.</td>
              </tr>
              <tr>
                <td>2026-06-18</td>
                <td>Central India Pharma Marketing Guild</td>
                <td>Conference Sponsorship Offer</td>
                <td>Direct conflict with public inquiry into unrecognised credentials.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
