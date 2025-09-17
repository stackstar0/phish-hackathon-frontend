import React, { useState } from "react";

function UrlForm({ setResult }) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/check-url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ status: "error", message: "Backend not reachable" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        placeholder="Enter URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Check URL</button>
    </form>
  );
}

export default UrlForm;
