import React from "react";
import { Link } from "react-router-dom";
import "./InvestigationCard.css";

const InvestigationCard = ({
  refCode,
  title,
  type,
  location,
  evidenceGrade,
  status,
  statusLabel,
  summary,
  districts = [],
  linkUrl = "#",
  publishedDate
}) => {
  const getBadgeClass = (st) => {
    switch (st) {
      case "CREDENTIALS VERIFIED":
        return "badge-verified";
      case "ENFORCEMENT REFERRED":
        return "badge-referred";
      case "INVESTIGATION CONCLUDED":
        return "badge-concluded";
      case "NOTICE ISSUED":
        return "badge-notice";
      default:
        return "badge-neutral";
    }
  };

  return (
    <article className="mpw-investigation-card">
      <div className="card-top-bar">
        <span className="card-ref-code">{refCode}</span>
        <div className="card-badges">
          {evidenceGrade && (
            <span className="badge badge-neutral">{evidenceGrade}</span>
          )}
          <span className={`badge ${getBadgeClass(status)}`}>
            {statusLabel || status}
          </span>
        </div>
      </div>

      <h3 className="card-heading">
        <Link to={linkUrl}>{title}</Link>
      </h3>

      <div className="card-meta-box">
        {type && (
          <div className="meta-line">
            <span className="meta-label">Category:</span>
            <span className="meta-value">{type}</span>
          </div>
        )}
        {location && (
          <div className="meta-line">
            <span className="meta-label">Jurisdiction:</span>
            <span className="meta-value">{location}</span>
          </div>
        )}
      </div>

      <p className="card-summary">{summary}</p>

      {districts && districts.length > 0 && (
        <div className="card-districts-row">
          <span className="districts-label">Impacted Districts:</span>
          <div className="districts-pills">
            {districts.map((d, i) => (
              <span key={i} className="district-pill">{d}</span>
            ))}
          </div>
        </div>
      )}

      <div className="card-footer-action">
        {publishedDate && (
          <span className="card-date">Published: {publishedDate}</span>
        )}
        <div className="card-action-links">
          <Link to="/method" className="card-method-link" title="Verify against Method">
            Method →
          </Link>
          <Link to={linkUrl} className="card-read-link">
            Full Record →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default InvestigationCard;
