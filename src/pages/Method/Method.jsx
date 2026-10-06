import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { mockMethodology } from "../../data/mockData";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Method.css";

const Method = () => {
  const { language } = useLanguage();

  return (
    <div className="method-page container">
      <PageHeader
        tag="EDITORIAL METHODOLOGY & STANDARDS · PART 2"
        title={language === "hi" ? "हम कैसे काम करते हैं — पद्धति एवं मानक" : "Our Methodology & Standards"}
        subtitle={
          language === "hi"
            ? "किसी भी व्यक्ति अथवा संस्थान के संबंध में प्रकाशित निष्कर्ष के लिए MPW एक कठोर, पूर्व-परिभाषित पद्धति का पालन करता है। प्रत्येक प्रकरण अभिलेख से इस पृष्ठ तक एक क्लिक में पहुँचा जा सकता है।"
            : "Every published finding adheres to a strict, pre-defined investigative methodology. Accessible in a single click from every published case record."
        }
        meta="One-Click Access Rule: Readers inspecting a finding regarding a named individual must be able to verify methodology in one step."
      />

      {/* 1. Evidence Grades A to E */}
      <section className="method-section">
        <div className="method-section-header">
          <h3>{language === "hi" ? "1. साक्ष्य श्रेणियां (Evidence Grades A to E)" : "1. Evidence Grades (A to E)"}</h3>
          <span className="rule-ref">EVID-SPEC-01</span>
        </div>
        <div className="grades-grid">
          {mockMethodology.evidenceGrades.map((g) => (
            <div key={g.grade} className="grade-card">
              <div className="grade-badge">{g.grade}</div>
              <h4>{g.title}</h4>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. The Three Gates */}
      <section className="method-section">
        <div className="method-section-header">
          <h3>{language === "hi" ? "2. प्रकाशन के तीन द्वार (The Three Gates)" : "2. The Three Gates of Publication"}</h3>
          <span className="rule-ref">GATE-CTRL-03</span>
        </div>
        <div className="gates-grid">
          {mockMethodology.threeGates.map((gt) => (
            <div key={gt.num} className="gate-card">
              <span className="gate-number">{gt.num}</span>
              <h4>{gt.name}</h4>
              <p>{gt.rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Four States of Knowledge */}
      <section className="method-section">
        <div className="method-section-header">
          <h3>{language === "hi" ? "3. ज्ञान की चार स्थितियां (The Four States of Knowledge)" : "3. The Four States of Knowledge"}</h3>
          <span className="rule-ref">KNOW-LADDER-04</span>
        </div>
        <div className="states-grid">
          {mockMethodology.statesOfKnowledge.map((s) => (
            <div key={s.id} className="knowledge-state-card">
              <span className="state-number">State {s.id}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Notice Procedure & Right of Reply */}
      <section className="method-section">
        <div className="method-section-header">
          <h3>{language === "hi" ? "4. नोटिस प्रक्रिया एवं उत्तर अधिकार" : "4. The Notice Procedure & Right of Reply"}</h3>
          <span className="rule-ref">PROC-NOTICE-02</span>
        </div>
        <div className="notice-process-box">
          <p>
            {language === "hi"
              ? "किसी भी व्यक्ति के विषय में विवरण प्रकाशित करने से पूर्व 15 दिनों का औपचारिक नोटिस प्रदान किया जाता है। नोटिस में एक एकल-उपयोग टोकन (Single-Use Token) सम्मिलित होता है जिसके माध्यम से संबंधित पक्ष बिना किसी खाते या पासवर्ड के सीधे दस्तावेज जमा कर सकता है। देर से आए उत्तर भी स्वीकार किए जाते हैं और उन्हें चिह्नित किया जाता है।"
              : "Before publishing findings regarding an individual, a statutory 15-day notice is served containing a unique single-use token. The subject enters the portal without requiring an account or password to submit rebuttal documents. Late replies are accepted and flagged, never rejected."}
          </p>
          <div className="receipt-wording-tag">
            <strong>{language === "hi" ? "नियत पावती शब्द:" : "Fixed Receipt Wording:"}</strong>{" "}
            <code>RESPONSE RECEIVED — VERIFICATION PENDING</code>
          </div>
        </div>
      </section>

      {/* 5. Do-Not-Publish List & Banned Copy */}
      <section className="method-section">
        <div className="method-section-header">
          <h3>{language === "hi" ? "5. अप्रकाशन सूची एवं वर्जित शब्दावली" : "5. Do-Not-Publish List & Banned Copy"}</h3>
          <span className="rule-ref">ETHICS-LEXICON-05</span>
        </div>
        <div className="banned-words-box">
          <p>
            {language === "hi"
              ? "MPW की संपादकीय नीति के अनुसार निम्न शब्दों का प्रयोग हमारी सामग्री में पूर्णतः प्रतिबंधित है: quack, fake, fraud, nakli, jhola. हम एक गंभीर सार्वजनिक अभिलेख हैं, कोई अभियान नहीं।"
              : "Every sensationalist pejorative is strictly banned in our copy: 'quack', 'fake', 'fraud', 'nakli', 'jhola'. We are a journalistic record of work, not a campaign."}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Method;