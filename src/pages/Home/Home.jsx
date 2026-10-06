import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { 
  mockNetworks, 
  mockCases, 
  mockMonthlyNumbers 
} from "../../data/mockData";
import InvestigationCard from "../../components/InvestigationCard/InvestigationCard";
import DataTable from "../../components/DataTable/DataTable";
import "./Home.css";

const Home = () => {
  const { language, t } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [selectedDistrict, setSelectedDistrict] = useState("ALL");

  // Filtering cases: Never filter out CREDENTIALS VERIFIED by default
  const filteredCases = mockCases.filter((item) => {
    if (selectedStatus !== "ALL" && item.status !== selectedStatus) {
      return false;
    }
    if (selectedDistrict !== "ALL" && !item.location.includes(selectedDistrict)) {
      return false;
    }
    return true;
  });

  // Table Columns configuration for Case Records
  const caseColumns = [
    {
      header: language === "hi" ? "संदर्भ कोड" : "Case Ref",
      accessor: "ref",
      render: (row) => (
        <Link to={`/investigations/${row.slug}`} className="table-ref-link">
          {row.ref}
        </Link>
      )
    },
    {
      header: language === "hi" ? "प्रकरण विवरण" : "Matter / Subject",
      render: (row) => (
        <div>
          <div className="table-subject-title">
            {language === "hi" ? row.title_hi : row.title_en}
          </div>
          <div className="table-subject-subtext">
            {language === "hi" ? row.verifiedDetails_hi : row.verifiedDetails_en}
          </div>
        </div>
      )
    },
    {
      header: language === "hi" ? "स्थान" : "Location",
      accessor: "location"
    },
    {
      header: language === "hi" ? "काउंसिल सत्यापन" : "Council Reference",
      render: (row) => <code className="table-council-code">{row.councilRef}</code>
    },
    {
      header: language === "hi" ? "साक्ष्य ग्रेड" : "Grade",
      render: (row) => <span className="badge badge-neutral">{row.evidenceGrade}</span>
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
        <Link to="/method" className="table-method-link" title="Verify against Method">
          {language === "hi" ? "नियम →" : "Method →"}
        </Link>
      )
    }
  ];

  return (
    <div className="home-page">
      {/* 1. ABOVE THE FOLD: MANDATORY STATEMENT OF WHAT MPW DOES & DOES NOT DO */}
      <section className="mandate-hero-section">
        <div className="container">
          <div className="mandate-card">
            <div className="mandate-header">
              <span className="mandate-kicker">{t.hero.mandateBadge}</span>
              <span className="mandate-reg-ref">PRGI TITLE APPLICATION REF: MPW/PUB/2026/01</span>
            </div>

            <h1 className="mandate-headline">
              {language === "hi"
                ? "स्वास्थ्य साख, संस्थागत संजाल एवं वैधानिक अनुपालन का स्वतंत्र सार्वजनिक अभिलेख"
                : "Independent Public Record of Healthcare Credentials, Institutional Networks & Statutory Compliance"}
            </h1>

            {/* The Strict One-Paragraph Statement */}
            <div className="mandate-body">
              <p className="mandate-paragraph">
                {t.hero.mandateStatement}
              </p>
            </div>

            {/* Above-the-fold Quick Links & Current Month Numbers Gateway */}
            <div className="mandate-footer-actions">
              <div className="mandate-buttons">
                <Link to="/networks" className="btn-primary">
                  {t.hero.viewNetworksBtn}
                </Link>
                <Link to="/investigations" className="btn-outline">
                  {t.hero.viewInvestigationsBtn}
                </Link>
              </div>

              <div className="current-numbers-banner">
                <span className="numbers-pill-icon">AUDIT RECORD</span>
                <Link to="/numbers" className="numbers-link">
                  {t.hero.currentNumbersLink}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION A: LATEST NETWORK INVESTIGATIONS (PRIMARY PRODUCT) */}
      <section className="section-networks-primary">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="primary-product-badge">{t.sections.primaryProductTag}</span>
              <h2 className="section-title">{t.sections.networkTitle}</h2>
              <p className="section-subtitle">{t.sections.networkSubtitle}</p>
            </div>
            <Link to="/networks" className="section-view-all">
              {t.sections.networkViewAll}
            </Link>
          </div>

          <div className="networks-grid">
            {mockNetworks.map((net) => (
              <InvestigationCard
                key={net.id}
                refCode={net.ref}
                title={language === "hi" ? net.title_hi : net.title_en}
                type={language === "hi" ? net.type_hi : net.type_en}
                location={net.headquarters}
                evidenceGrade={net.evidenceGrade}
                status={net.status}
                statusLabel={language === "hi" ? net.status_hi : net.status}
                summary={language === "hi" ? net.summary_hi : net.summary_en}
                districts={net.districtsImpacted}
                publishedDate={net.publishedDate}
                linkUrl={`/networks/${net.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION B: LATEST CASE RECORDS (CREDENTIALS VERIFIED BY DEFAULT) */}
      <section className="section-case-records">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">{t.sections.casesTitle}</h2>
              <p className="section-subtitle">{t.sections.casesSubtitle}</p>
            </div>
            <Link to="/investigations" className="section-view-all">
              {t.sections.casesViewAll}
            </Link>
          </div>

          <div className="cases-mandatory-notice">
            <span className="notice-bullet">ℹ</span>
            <span className="notice-text">{t.sections.casesNotice}</span>
          </div>

          {/* Permitted Filters: State, District, Status, Date. Strictly NO Name Filter! */}
          <div className="filter-controls-bar">
            <div className="filter-group">
              <label htmlFor="status-filter">{language === "hi" ? "स्थिति अनुसार फ़िल्टर:" : "Filter by Status:"}</label>
              <select 
                id="status-filter"
                value={selectedStatus} 
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="filter-select"
              >
                <option value="ALL">{language === "hi" ? "सभी स्थितियां (सत्यापित सहित)" : "All Statuses (Verified Included)"}</option>
                <option value="CREDENTIALS VERIFIED">{t.status.verified}</option>
                <option value="ENFORCEMENT REFERRED">{t.status.referred}</option>
                <option value="NOTICE ISSUED">{t.status.notice}</option>
                <option value="INVESTIGATION CONCLUDED">{t.status.concluded}</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="district-filter">{language === "hi" ? "जिला / क्षेत्र:" : "Filter by District:"}</label>
              <select 
                id="district-filter"
                value={selectedDistrict} 
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="filter-select"
              >
                <option value="ALL">{language === "hi" ? "सभी जिले (मध्य प्रदेश)" : "All Districts (Madhya Pradesh)"}</option>
                <option value="Bhopal">Bhopal (भोपाल)</option>
                <option value="Indore">Indore (इंदौर)</option>
                <option value="Gwalior">Gwalior (ग्वालियर)</option>
                <option value="Jabalpur">Jabalpur (जबलपुर)</option>
              </select>
            </div>

            <div className="filter-sort-indicator">
              <span>{language === "hi" ? "क्रम: नवीनतम तिथि अनुसार (गंभीरता अनुसार नहीं)" : "Sorted by: Date (Not by Severity)"}</span>
            </div>
          </div>

          {/* Reusable DataTable for Case Records */}
          <DataTable
            columns={caseColumns}
            data={filteredCases}
            rowKey="id"
            emptyText={language === "hi" ? "कोई प्रकरण अभिलेख उपलब्ध नहीं।" : "No case records found matching filters."}
          />
        </div>
      </section>

      {/* 4. SECTION C: MONTHLY NUMBERS IN FIXED APPENDIX F SEQUENCE */}
      <section className="section-numbers-summary">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">{t.sections.numbersTitle}</h2>
              <p className="section-subtitle">{t.sections.numbersSubtitle}</p>
            </div>
            <Link to="/numbers" className="section-view-all">
              {language === "hi" ? "पूर्ण ऑडिट डैशबोर्ड →" : "Full Numbers Audit →"}
            </Link>
          </div>

          <div className="appendix-rule-callout">
            <strong>{language === "hi" ? "परिशिष्ट F अनिवार्य नियम:" : "Appendix F Mandatory Requirement:"}</strong>{" "}
            {t.sections.numbersNotice}
          </div>

          <div className="appendix-metrics-grid">
            {mockMonthlyNumbers.appendixOrder.map((metric) => (
              <div key={metric.order} className="appendix-metric-card">
                <div className="metric-order-badge">Order #{metric.order}</div>
                <div className="metric-number-display">{metric.count}</div>
                <h3 className="metric-title">
                  {language === "hi" ? metric.metric_hi : metric.metric_en}
                </h3>
                <p className="metric-explanation">
                  {language === "hi" ? metric.note_hi : metric.note_en}
                </p>
                {metric.breakdown && (
                  <div className="metric-sub-breakdown">
                    {metric.breakdown.corrections !== undefined && (
                      <span>Corrections: <strong>{metric.breakdown.corrections}</strong> | Withdrawals: <strong>{metric.breakdown.withdrawals}</strong></span>
                    )}
                    {metric.breakdown.upheld !== undefined && (
                      <span>Received: <strong>{metric.breakdown.received}</strong> | Upheld: <strong>{metric.breakdown.upheld}</strong></span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION D: ARCHITECTURAL PRINCIPLES & DELIBERATELY ABSENT POLICIES */}
      <section className="section-deliberately-absent">
        <div className="container">
          <div className="absent-card">
            <div className="absent-header">
              <span className="absent-badge">SECTION 5 COMPLIANCE</span>
              <h3 className="absent-title">{t.deliberateAbsent.title}</h3>
            </div>
            <p className="absent-explanation">
              {t.deliberateAbsent.desc}
            </p>

            <div className="absent-grid">
              <div className="absent-item">
                <span className="absent-icon">✕</span>
                <div>
                  <strong>{language === "hi" ? "कोई डॉक्टर डायरेक्टरी या सर्च नहीं:" : "No Doctor Directory / Name Lookup:"}</strong>
                  <p>{language === "hi" 
                    ? "MPW कोई वैधानिक प्रत्यायन संस्था नहीं है। किसी भी व्यक्ति के नाम पर सर्च करने का कोई टूल नहीं है।" 
                    : "Prevents creating de facto accreditation liability. Search only covers networks and policies."}</p>
                </div>
              </div>

              <div className="absent-item">
                <span className="absent-icon">✕</span>
                <div>
                  <strong>{language === "hi" ? "कोई टिप्पणियां या रेटिंग नहीं:" : "No Comments, Ratings, or Forums:"}</strong>
                  <p>{language === "hi" 
                    ? "सतर्कता हिंसा (Vigilantism) और बदनामी से बचाव के लिए कोई पब्लिक कमेंट सिस्टम नहीं है।" 
                    : "Strict anti-vigilantism standard. Built without rating or forum infrastructure."}</p>
                </div>
              </div>

              <div className="absent-item">
                <span className="absent-icon">✕</span>
                <div>
                  <strong>{language === "hi" ? "शून्य विज्ञापन व शुल्क:" : "Zero Ads, Donations, or Fees:"}</strong>
                  <p>{language === "hi" 
                    ? "चिकित्सकों या संस्थानों से कोई शुल्क या विज्ञापन नहीं लिया जाता। संपादकीय स्वतंत्रता पूर्णतः अक्षुण्ण है।" 
                    : "Maintains absolute financial independence from practitioners and industry."}</p>
                </div>
              </div>

              <div className="absent-item">
                <span className="absent-icon">✕</span>
                <div>
                  <strong>{language === "hi" ? "कोई ट्रैकर या यूजर अकाउंट नहीं:" : "No Third-Party Trackers or Accounts:"}</strong>
                  <p>{language === "hi" 
                    ? "पाठकों की निजता सर्वोपरि है; कोई थर्ड-पार्टी एनालिटिक्स या कुकी ट्रैकर सक्रिय नहीं है।" 
                    : "Reader privacy is protected against surveillance; zero tracking scripts or logins."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. METHOD BANNER */}
      <section className="section-method-cta">
        <div className="container method-cta-container">
          <div className="method-cta-text">
            <h3>{t.sections.methodTitle}</h3>
            <p>{t.sections.methodSubtitle}</p>
          </div>
          <Link to="/method" className="btn-primary">
            {language === "hi" ? "पद्धति और साक्ष्य नियम पढ़ें →" : "Read Full Methodology Rules →"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;