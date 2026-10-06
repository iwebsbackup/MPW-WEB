import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Policies = () => {
  const { language } = useLanguage();

  return (
    <div className="container" style={{ padding: "3rem 1.5rem" }}>
      <div className="page-header">
        <span className="page-category-tag">STATUTORY PUBLICATION POLICIES</span>
        <h1 className="page-title">{language === "hi" ? "संपादकीय एवं विधिक नीतियाँ" : "Editorial & Statutory Policies"}</h1>
        <p className="page-desc">
          {language === "hi"
            ? "मेडिकल प्रैक्टिस वॉच की संपादकीय नीति, सुधार संहिता, डेटा संरक्षण सूचना और उपयोग की शर्तें।"
            : "Editorial standards, corrections protocol, reader privacy notice, and terms of archival access."}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Editorial Policy */}
        <section id="editorial" style={{ background: "#fff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--primary)" }}>
            1. Editorial & Verification Policy
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-body)" }}>
            MPW operates as an archival record of healthcare qualifications and institutions. Every investigation requires at least one primary source (Grade A evidence) before drafting. No conclusion is published without serving a 15-day formal notice containing a single-use reply token to allow the subject to submit rebuttal material.
          </p>
        </section>

        {/* Corrections Policy */}
        <section id="corrections" style={{ background: "#fff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--primary)" }}>
            2. Corrections & Withdrawal Policy
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-body)" }}>
            URLs are permanent and immutable. A withdrawn or amended article maintains its permanent URL with a prominent, neutral correction note detailing what was originally reported, what new material arrived, and what verification was performed. Cases resolved with valid credentials remain in the public record marked as <code>CREDENTIALS VERIFIED</code> and are never demoted or hidden.
          </p>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" style={{ background: "#fff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--primary)" }}>
            3. Privacy & Anti-Surveillance Notice
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-body)" }}>
            We deliberately deploy zero third-party analytics trackers, no advertising pixels, and no social media widgets. Readers reading articles about named persons are never tracked or fingerprinted. Data collected via the Notice Portal or Grievance Form is processed strictly for statutory verification purposes.
          </p>
        </section>

        {/* Terms of Use */}
        <section id="terms" style={{ background: "#fff", border: "1px solid var(--border-medium)", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--primary)" }}>
            4. Terms of Archival Access
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-body)" }}>
            Reproduction of findings must include the full case reference, evidence grade, and date of publication. Automated harvesting or scraping to construct unauthorized practitioner directories or commercial rating services is prohibited and subject to legal injunction.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Policies;
