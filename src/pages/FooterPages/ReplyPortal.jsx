import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import PageHeader from "../../components/PageHeader/PageHeader";

const ReplyPortal = () => {
  const { language } = useLanguage();
  const [caseRef, setCaseRef] = useState("");
  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [documents, setDocuments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caseRef && token) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container" style={{ padding: "2.5rem 1.5rem" }}>
      <PageHeader
        tag="STATUTORY NOTICE RESPONSE PORTAL · PART 3"
        title={language === "hi" ? "अपना पक्ष रखें — नोटिस उत्तर पोर्टल" : "Notice Response Portal"}
        subtitle={
          language === "hi"
            ? "यह पोर्टल विशेष रूप से उन व्यक्तियों एवं संस्थानों के लिए है जिन्हें MPW द्वारा औपचारिक नोटिस जारी किया गया है। नोटिस पर मुद्रित केस संदर्भ एवं एकल-उपयोग टोकन (Single-Use Token) दर्ज करें। खाता बनाने या पासवर्ड की कोई आवश्यकता नहीं है।"
            : "Accessible strictly via the Case Reference and Single-Use Token printed on the formal notice. No account or password required. Displays only case reference, deadline, and documents sought. Never displays internal assessments."
        }
        meta="Protocol: Late responses are accepted and flagged, never rejected."
      />

      {!submitted ? (
        <div style={{ background: "#fff", border: "1px solid var(--border-medium)", padding: "2.25rem", maxWidth: "650px", borderLeft: "5px solid var(--primary)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                {language === "hi" ? "केस संदर्भ संख्या (Case Reference):" : "Case Reference Number:"}
              </label>
              <input
                type="text"
                placeholder="e.g. MPW-CASE-2026-085"
                value={caseRef}
                onChange={(e) => setCaseRef(e.target.value)}
                required
                style={{ width: "100%", padding: "0.65rem", border: "1px solid var(--border-medium)", fontFamily: "monospace", fontSize: "0.9rem" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                {language === "hi" ? "एकल-उपयोग टोकन (Single-Use Token):" : "Single-Use Token (from physical notice):"}
              </label>
              <input
                type="text"
                placeholder="e.g. TK-9481-BHP-X7"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
                style={{ width: "100%", padding: "0.65rem", border: "1px solid var(--border-medium)", fontFamily: "monospace", fontSize: "0.9rem" }}
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginTop: "0.25rem" }}>
                {language === "hi" ? "टोकन केवल एक बार मान्य है। देर से आए उत्तर भी स्वीकार किए जाते हैं और चिह्नित किए जाते हैं।" : "Tokens are single-use. Late responses are accepted and flagged, never rejected."}
              </span>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                {language === "hi" ? "दस्तावेज संदर्भ / लिखित स्पष्टीकरण:" : "Document Details / Written Explanation:"}
              </label>
              <textarea
                rows="4"
                placeholder={language === "hi" ? "काउंसिल पंजीकरण क्रमांक, विश्वविद्यालय अधिसूचना विवरण..." : "Council registration numbers, gazette references..."}
                value={documents}
                onChange={(e) => setDocuments(e.target.value)}
                style={{ width: "100%", padding: "0.65rem", border: "1px solid var(--border-medium)", fontFamily: "inherit", fontSize: "0.9rem" }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              {language === "hi" ? "उत्तर व दस्तावेज प्रस्तुत करें" : "Submit Response & Documents"}
            </button>
          </form>
        </div>
      ) : (
        <div style={{ background: "#ecfdf5", border: "2px solid #059669", padding: "2.5rem", maxWidth: "650px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span style={{ background: "#059669", color: "#fff", fontSize: "0.75rem", fontWeight: 700, padding: "0.2rem 0.6rem", letterSpacing: "0.05em" }}>
            MANDATORY FIXED RECEIPT
          </span>
          <h2 style={{ fontSize: "1.75rem", color: "#065f46", margin: "1rem 0" }}>
            RESPONSE RECEIVED — VERIFICATION PENDING
          </h2>
          <p style={{ color: "#065f46", fontSize: "0.95rem", lineHeight: 1.6 }}>
            {language === "hi"
              ? `केस संदर्भ ${caseRef} हेतु आपके दस्तावेज स्वीकार कर लिए गए हैं। स्वतंत्र सत्यापन दल प्राथमिक स्रोतों (काउंसिल एवं विश्वविद्यालय) से मिलान करेगा।`
              : `Your response for Case Ref ${caseRef} has been logged. Independent verification against primary statutory council ledgers has been initiated.`}
          </p>
          <div style={{ marginTop: "1.5rem", borderTop: "1px solid #a7f3d0", paddingTop: "1rem", fontSize: "0.82rem", color: "#047857" }}>
            Timestamp: {new Date().toISOString()} | Ref: {caseRef}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplyPortal;
