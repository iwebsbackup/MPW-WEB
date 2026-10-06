import React from "react";
import "./DataTable.css";

const DataTable = ({ 
  columns = [], 
  data = [], 
  rowKey = "id", 
  emptyText = "No records found.",
  caption = null
}) => {
  return (
    <div className="mpw-data-table-container">
      {caption && <div className="table-caption-bar">{caption}</div>}
      <div className="table-scroll-wrapper">
        <table className="mpw-data-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} style={{ textAlign: col.align || "left", width: col.width || "auto" }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="empty-cell">
                  {emptyText}
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => {
                const isVerified = row.status === "CREDENTIALS VERIFIED";
                return (
                  <tr key={row[rowKey] || rowIdx} className={isVerified ? "row-verified" : ""}>
                    {columns.map((col, colIdx) => (
                      <td key={colIdx} style={{ textAlign: col.align || "left" }}>
                        {col.render ? col.render(row) : row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
