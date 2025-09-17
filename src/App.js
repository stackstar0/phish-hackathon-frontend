import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/check-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-[90%] max-w-lg text-center border border-white/30">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg mb-6">
          🔐 AI-Powered Phishing URL Detector
        </h1>
        <form onSubmit={checkUrl} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter a URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            🚀 Check URL
          </button>
        </form>

        {result && (
          <div className="mt-6">
            {result.phishing ? (
              <p className="text-red-500 font-bold text-xl animate-pulse">
                ❌ Phishing Detected!
              </p>
            ) : (
              <p className="text-green-400 font-bold text-xl animate-bounce">
                ✅ Safe URL
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
