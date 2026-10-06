import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { mockNetworks } from "../../data/mockData";
import PageHeader from "../../components/PageHeader/PageHeader";
import InvestigationCard from "../../components/InvestigationCard/InvestigationCard";
import "./Networks.css";

const Networks = () => {
  const { language } = useLanguage();

  return (
    <div className="networks-page container">
      <PageHeader
        tag="PRIMARY PUBLICATION PRODUCT · PART 2"
        title={language === "hi" ? "संस्थागत पड़ताल सूचकांक" : "Institutional Network Investigations"}
        subtitle={
          language === "hi"
            ? "यह मेडिकल प्रैक्टिस वॉच का प्राथमिक उत्पाद (Primary Product) है। यह खंड व्यक्तिगत चिकित्सकों के स्थान पर संस्थागत स्तर के नेटवर्कों — गैर-सांविधिक परिषदों, डिग्री दलालों, बैकडेटिंग सिंडिकेट्स, और अपंजीकृत फ्रेंचाइजी अध्ययन केंद्रों का विस्तृत दस्तावेजीकरण करता है।"
            : "The primary product of Medical Practice Watch. Documents institution-level investigations — non-statutory boards and self-styled councils, degree brokers, backdating operations, and franchise study centres."
        }
        meta={
          language === "hi"
            ? "संपादकीय नीति: संस्थागत सिंडिकेट्स की जांच सार्वजनिक स्वास्थ्य सुरक्षा की प्राथमिक आवश्यकता है।"
            : "Editorial Priority: Institution-level networks are the primary focus of MPW investigative documentation."
        }
      />

      <div className="networks-list">
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
  );
};

export default Networks;