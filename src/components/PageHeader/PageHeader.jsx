import React from "react";
import "./PageHeader.css";

const PageHeader = ({ 
  tag = "MEDICAL PRACTICE WATCH", 
  title, 
  subtitle, 
  meta = null 
}) => {
  return (
    <div className="mpw-page-header">
      {tag && <div className="mpw-header-tag">{tag}</div>}
      <h1 className="mpw-header-title">{title}</h1>
      {subtitle && <p className="mpw-header-subtitle">{subtitle}</p>}
      {meta && <div className="mpw-header-meta">{meta}</div>}
    </div>
  );
};

export default PageHeader;
