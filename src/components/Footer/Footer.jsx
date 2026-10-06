import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="site-footer">
      {/* Statutory & Compliance Bar */}
      <div className="footer-top-compliance">
        <div className="container compliance-banner">
          <div className="compliance-icon-text">
            <span className="compliance-tag">COMPLIANCE STATUTORY DISCLOSURE</span>
            <p className="compliance-text">
              {t.footer.complianceNotice}
            </p>
          </div>
          <div className="officer-quick-contact">
            <span className="officer-label">
              {language === "hi" ? "नामित शिकायत अधिकारी (भारत):" : "Named Grievance Officer (India):"}
            </span>
            <span className="officer-details">
              Adv. R. K. Saxena | grievance@medicalpracticewatch.org
            </span>
          </div>
        </div>
      </div>

      {/* Main Mandatory 6 Columns Footer Grid */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Col 1: Reply / Notice Portal */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.noticeReply}</h4>
            <p className="footer-desc">
              {language === "hi" 
                ? "प्राप्त नोटिस पर मुद्रित केस संदर्भ एवं एकल-उपयोग टोकन (Single-Use Token) द्वारा उत्तर दर्ज करें।"
                : "Submit written statement using Case Reference and Single-Use Token printed on statutory notice."}
            </p>
            <Link to="/reply" className="footer-link-action">
              {language === "hi" ? "उत्तर पोर्टल खोलें →" : "Open Response Portal →"}
            </Link>
            <div className="token-hint">
              {language === "hi" ? "खाता या पासवर्ड आवश्यक नहीं" : "No account / password required"}
            </div>
          </div>

          {/* Col 2: Grievance Redressal */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.grievance}</h4>
            <p className="footer-desc">
              {language === "hi" 
                ? "पावती: 24 घंटे के भीतर | अंतिम निर्णय: 15 कार्यदिवस। मासिक शिकायत आंकड़े सार्वजनिक रूप से उपलब्ध।"
                : "Acknowledgement: 24 hours | Final Decision: 15 statutory days. Monthly grievance logs published."}
            </p>
            <Link to="/grievance" className="footer-link-action">
              {language === "hi" ? "शिकायत दर्ज करें →" : "Submit Grievance →"}
            </Link>
          </div>

          {/* Col 3: Corrections & Withdrawals */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.corrections}</h4>
            <p className="footer-desc">
              {language === "hi" 
                ? "सभी सुधारों, अद्यतनों व वापसी का स्थायी, कालक्रमानुसार (Reverse-chronological) सार्वजनिक रजिस्टर।"
                : "Permanent public register of every factual correction, evidence update and withdrawal."}
            </p>
            <Link to="/corrections" className="footer-link-action">
              {language === "hi" ? "संशोधन रजिस्टर →" : "Public Register →"}
            </Link>
          </div>

          {/* Col 4: About MPW */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.about}</h4>
            <p className="footer-desc">
              {language === "hi" 
                ? "पंजीकृत निकाय, स्वतंत्र सदस्य सहित संचालक मंडल, पूर्ण फंडिंग प्रकटीकरण एवं अस्वीकृत निधियों की सूची।"
                : "Legal entity, governing board, independent trustees, funding sources & refused-funding list."}
            </p>
            <Link to="/about" className="footer-link-action">
              {language === "hi" ? "संस्थागत विवरण →" : "Institutional Record →"}
            </Link>
          </div>

          {/* Col 5: Policies */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.policies}</h4>
            <ul className="footer-list">
              <li><Link to="/policies#editorial">{language === "hi" ? "संपादकीय नीति" : "Editorial Policy"}</Link></li>
              <li><Link to="/policies#corrections">{language === "hi" ? "सुधार नीति" : "Corrections Policy"}</Link></li>
              <li><Link to="/policies#privacy">{language === "hi" ? "गोपनीयता सूचना" : "Privacy Notice"}</Link></li>
              <li><Link to="/policies#terms">{language === "hi" ? "उपयोग की शर्तें" : "Terms of Use"}</Link></li>
            </ul>
          </div>

          {/* Col 6: Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">{t.footer.contact}</h4>
            <p className="footer-address">
              <strong>Medical Practice Watch</strong><br />
              Central Editorial Bureau<br />
              Bhopal, Madhya Pradesh 462001
            </p>
            <p className="footer-email">
              editorial@medicalpracticewatch.org
            </p>
            <p className="footer-phone-prohibition">
              {language === "hi" 
                ? "कर्मचारियों के व्यक्तिगत मोबाइल नंबर नीतिगत रूप से वर्जित हैं।"
                : "Personal mobile numbers of staff are prohibited under security policy."}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Zero Commercial Statement */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <div className="bottom-disclaimer">
            <strong>{language === "hi" ? "स्वतंत्रता घोषणा:" : "Independence Affirmation:"}</strong>{" "}
            {language === "hi" 
              ? "MPW चिकित्सकों को कुछ नहीं बेचता और उनसे कुछ भी स्वीकार नहीं करता। कोई विज्ञापन, भुगतान अथवा प्रायोजन स्वीकृत नहीं है।"
              : "MPW sells nothing to practitioners and accepts nothing from them. Zero advertising, commercial fees, or sponsorships accepted."}
          </div>
          <div className="bottom-copyright">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;