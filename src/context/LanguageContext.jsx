import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  hi: {
    siteTitle: "मेडिकल प्रैक्टिस वॉच",
    siteSubTitle: "स्वास्थ्य साख, संस्थागत नेटवर्क और सांविधिक कार्रवाई का स्वतंत्र सार्वजनिक अभिलेख",
    domainNotice: "आधिकारिक डोमेन: medicalpracticewatch.org (प्राथमिक) | medicalpracticewatch.in (रीडायरेक्ट)",
    nav: {
      home: "मुख्य पृष्ठ",
      investigations: "पड़ताल",
      networks: "संस्थागत पड़ताल",
      enforcement: "कार्रवाई की स्थिति",
      numbers: "आँकड़े",
      method: "हम कैसे काम करते हैं"
    },
    hero: {
      mandateBadge: "संपादकीय नीति एवं वैधानिक दायरा",
      mandateStatement: "मेडिकल प्रैक्टिस वॉच (MPW) भारत में गैर-सांविधिक चिकित्सा प्रमाणपत्रों, अपंजीकृत संस्थानों और संदिग्ध डिग्री नेटवर्कों की स्वतंत्र तथ्यात्मक पड़ताल और सार्वजनिक अभिलेख का प्रकाशन करता है। MPW कोई सरकारी निकाय, सांविधिक परिषद या लाइसेंसिंग प्राधिकरण नहीं है; यह चिकित्सकों की कोई डायरेक्टरी नहीं बनाता, न ही कोई मान्यता या रेटिंग प्रदान करता है। MPW चिकित्सकों अथवा संस्थानों से न तो कुछ बेचता है और न ही कोई विज्ञापन या शुल्क स्वीकार करता है।",
      currentNumbersLink: "चालू माह के आँकड़े (अक्टूबर 2026) देखें →",
      viewNetworksBtn: "संस्थागत पड़ताल देखें",
      viewInvestigationsBtn: "पड़ताल अभिलेख देखें"
    },
    sections: {
      primaryProductTag: "प्रमुख प्रकाशन श्रेणी",
      networkTitle: "नवीनतम संस्थागत पड़ताल",
      networkSubtitle: "गैर-सांविधिक बोर्ड, डिग्री दलाल, बैकडेटिंग ऑपरेशन और गैर-मान्यता प्राप्त अध्ययन केंद्र",
      networkViewAll: "सभी संस्थागत नेटवर्क देखें →",
      casesTitle: "नवीनतम प्रकरण अभिलेख",
      casesSubtitle: "प्रमाणित साख सहित सभी व्यक्तिगत एवं क्लिनिकल सत्यापन रिकॉर्ड (दिनांक अनुसार क्रमबद्ध)",
      casesNotice: "संपादकीय नियम: 'प्रमाणपत्र सत्यापित' (CREDENTIALS VERIFIED) प्रकरण स्वतः प्रदर्शित होते हैं और कभी छिपाए नहीं जाते।",
      casesViewAll: "सभी प्रकरण अभिलेख देखें →",
      numbersTitle: "चालू माह के आँकड़े (परिशिष्ट F क्रम)",
      numbersSubtitle: "डेटाबेस द्वारा स्वतः संकलित मासिक ऑडिट (अक्टूबर 2026)",
      numbersNotice: "परिशिष्ट F के अनिवार्य क्रम में: सत्यापित साख सर्वप्रथम, संशोधन द्वितीय, और शिकायतें तृतीय।",
      methodTitle: "हमारा कार्य सिद्धांत व पारदर्शिता",
      methodSubtitle: "ज्ञान की चार स्थितियां, साक्ष्य श्रेणियां A से E, तीन द्वार और नोटिस प्रक्रिया"
    },
    status: {
      verified: "प्रमाणपत्र सत्यापित",
      concluded: "पड़ताल संपन्न",
      referred: "कार्रवाई हेतु संदर्भित",
      notice: "नोटिस जारी / उत्तर प्रतीक्षित",
      pending: "सत्यापन लंबित"
    },
    footer: {
      noticeReply: "अपना पक्ष रखें",
      noticeReplyDesc: "नोटिस संदर्भ और एकल-उपयोग टोकन से प्रवेश",
      grievance: "शिकायत निवारण",
      grievanceDesc: "नामित शिकायत अधिकारी (24 घंटे में पावती, 15 दिनों में निर्णय)",
      corrections: "सुधार एवं संशोधन",
      correctionsDesc: "संशोधनों एवं वापसी का स्थायी सार्वजनिक रजिस्टर",
      about: "हमारे बारे में",
      aboutDesc: "वैधानिक निकाय, संचालन मंडल व फंडिंग घोषणा",
      policies: "नीतियाँ",
      policiesDesc: "संपादकीय, गोपनीयता एवं उपयोग की शर्तें",
      contact: "संपर्क",
      contactDesc: "केवल आधिकारिक संपादकीय ई-मेल व पंजीकृत कार्यालय",
      complianceNotice: "अनुपालन सूचना: यह मंच जनहित में प्रकाशित एक स्वतंत्र खोजी पत्रकारिता अभिलेख है। MPW किसी भी चिकित्सक को प्रमाणित करने वाली वैधानिक संस्था नहीं है।",
      copyright: "© 2026 मेडिकल प्रैक्टिस वॉच (MPW). सभी अधिकार सुरक्षित। अभिलेख स्थायी हैं।"
    },
    deliberateAbsent: {
      title: "व्यवस्थागत अनुपस्थिति (Deliberately Absent Policy)",
      desc: "इस पोर्टल पर डॉक्टर खोज (Name Lookup), सार्वजनिक रेटिंग, टिप्पणियां, विज्ञापन, डोनेशन बटन या यूजर अकाउंट जानबूझकर नहीं बनाए गए हैं ताकि किसी भी प्रकार की सतर्कता हिंसा (Vigilantism) या व्यावसायिक दबाव से बचा जा सके।"
    }
  },
  en: {
    siteTitle: "MEDICAL PRACTICE WATCH",
    siteSubTitle: "An Independent Public Record of Healthcare Credentials, Institutional Networks, and Enforcement",
    domainNotice: "Official Domain: medicalpracticewatch.org (Primary) | medicalpracticewatch.in (Redirect)",
    nav: {
      home: "Home",
      investigations: "Investigations",
      networks: "Networks",
      enforcement: "Enforcement",
      numbers: "Numbers",
      method: "How We Work"
    },
    hero: {
      mandateBadge: "EDITORIAL CHARTER & STATUTORY SCOPE",
      mandateStatement: "Medical Practice Watch (MPW) is an independent public record and journalistic publication documenting non-statutory medical qualifications, unrecognised institutional networks, backdated degrees, and statutory enforcement actions. MPW is not a statutory council, registry, or licensing authority; it maintains no practitioner directory, issues no accreditations, and conducts no commercial dealings. MPW sells nothing to practitioners and accepts nothing from them.",
      currentNumbersLink: "View Current Month Numbers (October 2026) →",
      viewNetworksBtn: "Explore Network Investigations",
      viewInvestigationsBtn: "View Investigation Records"
    },
    sections: {
      primaryProductTag: "PRIMARY PUBLICATION PRODUCT",
      networkTitle: "Latest Network Investigations",
      networkSubtitle: "Non-statutory boards and councils, degree brokers, backdating operations, and unrecognised study centres",
      networkViewAll: "View All Institutional Networks →",
      casesTitle: "Latest Case Records",
      casesSubtitle: "Individual and clinical credential investigations, including verified practitioners (Sorted by date)",
      casesNotice: "Editorial Rule: Cases closed as CREDENTIALS VERIFIED appear by default and are never demoted or hidden.",
      casesViewAll: "View All Case Records →",
      numbersTitle: "Current Month Numbers (Appendix F Order)",
      numbersSubtitle: "Database-generated monthly integrity dashboard (October 2026)",
      numbersNotice: "Mandatory Appendix F sequence: Credentials verified first, corrections second, grievances third.",
      methodTitle: "Our Methodology & Standards",
      methodSubtitle: "The four states of knowledge, evidence grades A to E, the three gates, and the notice procedure"
    },
    status: {
      verified: "CREDENTIALS VERIFIED",
      concluded: "INVESTIGATION CONCLUDED",
      referred: "ENFORCEMENT REFERRED",
      notice: "NOTICE ISSUED / RESPONSE PENDING",
      pending: "VERIFICATION PENDING"
    },
    footer: {
      noticeReply: "Submit Response",
      noticeReplyDesc: "Notice access via Case Reference and Single-use Token",
      grievance: "Grievance Redressal",
      grievanceDesc: "Named Grievance Officer (24h ack, 15-day statutory resolution)",
      corrections: "Corrections & Updates",
      correctionsDesc: "Permanent public register of all corrections & withdrawals",
      about: "About MPW",
      aboutDesc: "Legal entity, governing board & funding disclosures",
      policies: "Policies",
      policiesDesc: "Editorial standards, privacy policy & terms of use",
      contact: "Contact",
      contactDesc: "Official editorial address & inquiries only",
      complianceNotice: "Compliance Notice: This site is an independent journalistic archive and record of work. MPW is not an official council, accreditation board or licensing register.",
      copyright: "© 2026 Medical Practice Watch (MPW). All rights reserved. Permanent archival records."
    },
    deliberateAbsent: {
      title: "Deliberately Absent Features by Design",
      desc: "By architectural design, MPW contains no doctor directories, name lookup, comments, ratings, donation buttons, ads, or reader accounts to preserve independence and prevent vigilantism."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("mpw_lang") || "hi";
  });

  useEffect(() => {
    localStorage.setItem("mpw_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "hi" ? "en" : "hi"));
  };

  const t = translations[language] || translations.hi;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
