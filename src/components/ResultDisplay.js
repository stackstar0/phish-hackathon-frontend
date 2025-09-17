import React from "react";

function ResultDisplay({ result }) {
  return (
    <div className={`result-display ${result.status}`}>
      {result.status === "success" ? (
        <p>
          URL Status: <strong>{result.phishing ? "Phishing ⚠️" : "Safe ✅"}</strong>
        </p>
      ) : (
        <p>{result.message}</p>
      )}
    </div>
  );
}

export default ResultDisplay;
