import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { mockEnforcement } from "../../data/mockData";
import PageHeader from "../../components/PageHeader/PageHeader";
import DataTable from "../../components/DataTable/DataTable";
import "./Enforcement.css";

const Enforcement = () => {
  const { language } = useLanguage();

  const columns = [
    {
      header: language === "hi" ? "संदर्भ कोड" : "Referral ID",
      accessor: "ref",
      render: (row) => (
        <Link to={`/enforcement/${row.ref}`} style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--primary)" }}>
          {row.ref}
        </Link>
      )
    },
    {
      header: language === "hi" ? "सांविधिक प्राधिकारी" : "Statutory Authority",
      render: (row) => (
        <strong>{language === "hi" ? row.authority_hi : row.authority_en}</strong>
      )
    },
    {
      header: language === "hi" ? "प्रेषण दिनांक" : "Date Referred",
      accessor: "date"
    },
    {
      header: language === "hi" ? "व्यतीत दिन" : "Elapsed Days",
      render: (row) => (
        <span className="elapsed-days-badge">{row.elapsedDays} days</span>
      )
    },
    {
      header: language === "hi" ? "वर्तमान चरण" : "Current Stage",
      render: (row) => (
        <span className={`badge ${
          row.statusState === "acknowledged_no_action" ? "badge-referred" :
          row.statusState === "investigated_no_violation" ? "badge-verified" :
          row.statusState === "no_response" ? "badge-notice" : "badge-neutral"
        }`}>
          {language === "hi" ? row.stage_hi : row.stage_en}
        </span>
      )
    }
  ];

  return (
    <div className="enforcement-page container">
      <PageHeader
        tag="SECTION 2 · STATUTORY REFERRALS"
        title={language === "hi" ? "कार्रवाई की स्थिति एवं संदर्भ ट्रैकर" : "Statutory Enforcement Tracker"}
        subtitle={
          language === "hi"
            ? "MPW द्वारा सांविधिक प्राधिकारियों को प्रेषित औपचारिक संदर्भों का सार्वजनिक ब्यौरा। चार गैर-कार्रवाई स्थितियां (कोई उत्तर नहीं, स्वीकृत किंतु निष्क्रिय, कार्रवाई से इनकार, और बिना उल्लंघन निष्कर्ष) कभी एक साथ नहीं जोड़ी जातीं, प्रत्येक को अलग से प्रदर्शित किया जाता है।"
            : "Complete public record of matters referred to statutory authorities. The four non-action states — no response, acknowledged but no action, declined to act, and investigated with no violation found — are displayed separately and never aggregated into one figure."
        }
        meta="Statutory Enumeration: Stages are fixed and immutable. Elapsed days calculated daily from referral date."
      />

      {/* 4 Distinct Non-Action State Cards */}
      <div className="non-action-states-grid">
        <div className="state-box state-no-response">
          <span className="state-code">STATE 1</span>
          <h4>{language === "hi" ? "कोई उत्तर नहीं" : "No Response"}</h4>
          <span className="state-count">1 Matter</span>
          <p>{language === "hi" ? "प्राधिकरण द्वारा कोई पावती या पत्राचार नहीं मिला।" : "Zero acknowledgement or communication received from authority."}</p>
        </div>

        <div className="state-box state-acknowledged">
          <span className="state-code">STATE 2</span>
          <h4>{language === "hi" ? "स्वीकृत किंतु कार्रवाई प्रतीक्षित" : "Acknowledged but No Action"}</h4>
          <span className="state-count">1 Matter</span>
          <p>{language === "hi" ? "संदर्भ प्राप्त किया गया लेकिन कोई फील्ड जांच शुरू नहीं हुई।" : "Referral received by officer; no field audit initiated."}</p>
        </div>

        <div className="state-box state-declined">
          <span className="state-code">STATE 3</span>
          <h4>{language === "hi" ? "कार्रवाई से इनकार" : "Declined to Act"}</h4>
          <span className="state-count">1 Matter</span>
          <p>{language === "hi" ? "क्षेत्राधिकार या प्रशासनिक कारणों से जांच अस्वीकृत।" : "Authority declined jurisdiction or formal investigation."}</p>
        </div>

        <div className="state-box state-no-violation">
          <span className="state-code">STATE 4</span>
          <h4>{language === "hi" ? "जांच संपन्न — उल्लंघन रहित" : "Investigated — No Violation"}</h4>
          <span className="state-count">1 Matter</span>
          <p>{language === "hi" ? "प्राधिकरण की आधिकारिक जांच में कोई अवैधता नहीं पाई गई।" : "Statutory inquiry completed; no violation found."}</p>
        </div>
      </div>

      {/* Enforcement Referral Table */}
      <DataTable
        columns={columns}
        data={mockEnforcement}
        rowKey="ref"
        caption={language === "hi" ? "प्राधिकारियों को प्रेषित संदर्भ सूची" : "Formal Referrals to Statutory Councils & Health Directorates"}
      />
    </div>
  );
};

export default Enforcement;