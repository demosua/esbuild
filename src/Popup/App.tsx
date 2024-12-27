import React from "react";

// Declare the chrome object as a global variable
declare const chrome: any;

export default function App() {
  const openOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Popup</h1>
      <button
        onClick={openOptions}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px"
        }}
      >
        Open Options
      </button>
    </div>
  );
}
