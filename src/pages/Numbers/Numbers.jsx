import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { mockMonthlyNumbers } from "../../data/mockData";
import PageHeader from "../../components/PageHeader/PageHeader";
import DataTable from "../../components/DataTable/DataTable";
import "./Numbers.css";

const Numbers = () => {
  const { language } = useLanguage();

  const districtColumns = [
    {
      header: "District (जिला)",
      accessor: "district",
      render: (row) => <strong>{row.district}</strong>
    },
    {
      header: "Active Inquiries",
      accessor: "active"
    },
    {
      header: "Credentials Verified",
      accessor: "verified",
      render: (row) => <span className="badge badge-verified">{row.verified}</span>
    },
    {
      header: "Notices Issued",
      accessor: "notices",
      render: (row) => <span className="badge badge-notice">{row.notices}</span>
    },
    {
      header: "Enforcement Referred",
      accessor: "referred",
      render: (row) => <span className="badge badge-referred">{row.referred}</span>
    }
  ];

  const districtData = [
    { district: "Bhopal (भोपाल)", active: 6, verified: 3, notices: 2, referred: 1 },
    { district: "Indore (इंदौर)", active: 5, verified: 2, notices: 2, referred: 1 },
    { district: "Jabalpur (जबलपुर)", active: 4, verified: 2, notices: 1, referred: 1 },
    { district: "Gwalior (ग्वालियर)", active: 4, verified: 1, notices: 2, referred: 1 },
    { district: "Ujjain (उज्जैन)", active: 3, verified: 1, notices: 1, referred: 1 }
  ];

  return (
    <div className="numbers-page container">
      <PageHeader
        tag="APPENDIX F AUDIT DASHBOARD · PART 2"
        title={language === "hi" ? "मासिक सत्यनिष्ठा एवं ऑडिट आँकड़े" : "Monthly Integrity & Numbers Dashboard"}
        subtitle={
          language === "hi"
            ? "परिशिष्ट F के अनिवार्य अनुक्रम में स्वतः संकलित आंकड़े: (1) सत्यापित साख सर्वप्रथम, (2) सुधार एवं वापसी द्वितीय, और (3) शिकायत निवारण तृतीय। यह सभी आंकड़े डेटाबेस से स्वतः उत्पन्न होते हैं, कभी हस्तलिखित या मैनुअल नहीं होते।"
            : "Monthly dashboard in fixed Appendix F order: credentials verified first, corrections and withdrawals second, grievances upheld third. All figures generated from the database, never typed."
        }
        meta="Audit Standard: Fixed Appendix F sequence prevents selective reporting or suppression of verification outcomes."
      />

      {/* Appendix F Sequenced Cards */}
      <div className="appendix-full-sequence">
        <div className="sequence-banner">
          <h3>{language === "hi" ? "अक्टूबर 2026 — त्रैमासिक ऑडिट Q3" : "October 2026 — Quarterly Audit Q3"}</h3>
          <span className="audit-period-tag">{mockMonthlyNumbers.audit.period}</span>
        </div>

        <div className="appendix-sequence-grid">
          {mockMonthlyNumbers.appendixOrder.map((m) => (
            <div key={m.order} className="sequence-card">
              <div className="sequence-header">
                <span className="order-pill">APPENDIX F · ORDER #{m.order}</span>
                <span className="db-sync-pill">DB LIVE SYNC</span>
              </div>
              <div className="sequence-number">{m.count}</div>
              <h3 className="sequence-name">
                {language === "hi" ? m.metric_hi : m.metric_en}
              </h3>
              <p className="sequence-desc">
                {language === "hi" ? m.note_hi : m.note_en}
              </p>
              {m.breakdown && (
                <div className="sequence-submetrics">
                  {m.breakdown.corrections !== undefined && (
                    <div className="submetric-row">
                      <span>Corrections: <strong>{m.breakdown.corrections}</strong></span>
                      <span>Withdrawals: <strong>{m.breakdown.withdrawals}</strong></span>
                    </div>
                  )}
                  {m.breakdown.received !== undefined && (
                    <div className="submetric-row">
                      <span>Received: <strong>{m.breakdown.received}</strong></span>
                      <span>Rejected: <strong>{m.breakdown.rejected}</strong></span>
                      <span>In Review: <strong>{m.breakdown.inReview}</strong></span>
                      <span>Upheld: <strong>{m.breakdown.upheld}</strong></span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quarterly District Composition Audit */}
      <div className="district-composition-card">
        <h3>{language === "hi" ? "त्रैमासिक जिला संरचना ऑडिट (District Composition Audit)" : "Quarterly District Composition Audit"}</h3>
        <p className="composition-desc">
          {language === "hi"
            ? "क्षेत्रीय संतुलन एवं निष्पक्षता सुनिश्चित करने हेतु मध्य प्रदेश के 22 जिलों में संचालित जांचों का त्रैमासिक भौगोलिक वितरण।"
            : "Geographic distribution of inquiries across 22 districts of Madhya Pradesh to audit regional balance and prevent sampling bias."}
        </p>

        <DataTable
          columns={districtColumns}
          data={districtData}
          rowKey="district"
          caption="Quarterly Geographic Distribution Across Key Administrative Divisions"
        />
      </div>
    </div>
  );
};

export default Numbers;