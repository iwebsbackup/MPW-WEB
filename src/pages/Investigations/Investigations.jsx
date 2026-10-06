import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { mockCases } from "../../data/mockData";
import PageHeader from "../../components/PageHeader/PageHeader";
import DataTable from "../../components/DataTable/DataTable";
import "./Investigations.css";

const Investigations = () => {
  const { language, t } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [selectedDistrict, setSelectedDistrict] = useState("ALL");
  const [selectedGrade, setSelectedGrade] = useState("ALL");

  const filteredCases = mockCases.filter((item) => {
    if (selectedStatus !== "ALL" && item.status !== selectedStatus) return false;
    if (selectedDistrict !== "ALL" && !item.location.includes(selectedDistrict)) return false;
    if (selectedGrade !== "ALL" && item.evidenceGrade !== selectedGrade) return false;
    return true;
  });

  const columns = [
    {
      header: language === "hi" ? "संदर्भ कोड" : "Ref",
      accessor: "ref",
      render: (row) => (
        <Link to={`/investigations/${row.slug}`} style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--primary)" }}>
          {row.ref}
        </Link>
      )
    },
    {
      header: language === "hi" ? "प्रकरण विवरण" : "Matter / Subject",
      render: (row) => (
        <div>
          <strong style={{ display: "block", color: "var(--text-main)" }}>
            {language === "hi" ? row.title_hi : row.title_en}
          </strong>
          <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            {language === "hi" ? row.verifiedDetails_hi : row.verifiedDetails_en}
          </span>
        </div>
      )
    },
    {
      header: language === "hi" ? "स्थान" : "Location",
      accessor: "location"
    },
    {
      header: language === "hi" ? "काउंसिल सत्यापन" : "Council Reference",
      render: (row) => (
        <code style={{ fontSize: "0.78rem", background: "#f4f4f4", padding: "0.15rem 0.4rem", borderRadius: "2px" }}>
          {row.councilRef}
        </code>
      )
    },
    {
      header: language === "hi" ? "साक्ष्य ग्रेड" : "Grade",
      render: (row) => <span className="badge badge-neutral">{row.evidenceGrade}</span>
    },
    {
      header: language === "hi" ? "दिनांक" : "Date",
      accessor: "publishedDate"
    },
    {
      header: language === "hi" ? "स्थिति बैज" : "Status Badge",
      render: (row) => (
        <span className={`badge ${
          row.status === "CREDENTIALS VERIFIED" ? "badge-verified" :
          row.status === "ENFORCEMENT REFERRED" ? "badge-referred" :
          row.status === "INVESTIGATION CONCLUDED" ? "badge-concluded" : "badge-notice"
        }`}>
          {language === "hi" ? row.status_hi : row.status}
        </span>
      )
    },
    {
      header: language === "hi" ? "पद्धति" : "Method",
      render: () => (
        <Link to="/method" style={{ fontSize: "0.78rem", color: "var(--primary)", fontWeight: 600 }}>
          {language === "hi" ? "नियम →" : "Method →"}
        </Link>
      )
    }
  ];

  return (
    <div className="investigations-page container">
      <PageHeader
        tag="SECTION 2 · MPW-WEB-REQ-02"
        title={language === "hi" ? "पड़ताल अभिलेख सूचकांक" : "Index of Published Case Records"}
        subtitle={
          language === "hi"
            ? "प्रत्येक प्रकाशित प्रकरण का पूर्ण अभिलेख। संपादकीय नियम के अनुसार 'प्रमाणपत्र सत्यापित' (CREDENTIALS VERIFIED) प्रकरण स्वतः प्रदर्शित होते हैं और कभी छिपाए या हटाए नहीं जाते। डिफ़ॉल्ट क्रम दिनांक अनुसार है, गंभीरता अनुसार नहीं।"
            : "Complete public repository of published case records. Under editorial rules, cases closed as CREDENTIALS VERIFIED appear by default and are never demoted or filtered out. Default sort is strictly by date, not severity."
        }
        meta={
          language === "hi"
            ? "अनिवार्य नियम: नाम द्वारा खोज वर्जित है। फिल्टर केवल राज्य, जिला, स्थिति, दिनांक और नेटवर्क पर आधारित हैं।"
            : "Mandatory Archival Rule: Name lookup is deliberately absent. Filtering is strictly by State, District, Status, Date, and Network."
        }
      />

      {/* Filter Bar */}
      <div className="investigations-filter-bar">
        <div className="filter-item">
          <label>{language === "hi" ? "स्थिति:" : "Status:"}</label>
          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            <option value="ALL">{language === "hi" ? "सभी स्थितियां (सत्यापित सहित)" : "All Statuses (Verified Included)"}</option>
            <option value="CREDENTIALS VERIFIED">{t.status.verified}</option>
            <option value="ENFORCEMENT REFERRED">{t.status.referred}</option>
            <option value="NOTICE ISSUED">{t.status.notice}</option>
            <option value="INVESTIGATION CONCLUDED">{t.status.concluded}</option>
          </select>
        </div>

        <div className="filter-item">
          <label>{language === "hi" ? "जिला:" : "District:"}</label>
          <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
            <option value="ALL">{language === "hi" ? "सभी जिले (मध्य प्रदेश)" : "All Districts (Madhya Pradesh)"}</option>
            <option value="Bhopal">Bhopal (भोपाल)</option>
            <option value="Indore">Indore (इंदौर)</option>
            <option value="Gwalior">Gwalior (ग्वालियर)</option>
            <option value="Jabalpur">Jabalpur (जबलपुर)</option>
          </select>
        </div>

        <div className="filter-item">
          <label>{language === "hi" ? "साक्ष्य श्रेणी:" : "Evidence Grade:"}</label>
          <select value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}>
            <option value="ALL">{language === "hi" ? "सभी श्रेणियां (A से D)" : "All Grades (A to D)"}</option>
            <option value="Grade A">Grade A (Primary Record)</option>
            <option value="Grade B">Grade B (Institutional)</option>
            <option value="Grade C">Grade C (Public Claim)</option>
          </select>
        </div>
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={filteredCases}
        rowKey="id"
        emptyText={language === "hi" ? "कोई प्रकरण नहीं मिला।" : "No investigations match the selected filters."}
      />
    </div>
  );
};

export default Investigations;