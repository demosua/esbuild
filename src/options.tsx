import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

declare const chrome: any;

const Options = () => {
  const [apiKey, setApiKey] = useState<string>("");
  const [apiSecret, setApiSecret] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { apiKey, apiSecret } = await chrome.storage.sync.get([
        "apiKey",
        "apiSecret"
      ]);
      setApiKey(apiKey || "");
      setApiSecret(apiSecret || "");
    })();
  }, []);

  const saveSettings = async () => {
    await chrome.storage.sync.set({ apiKey, apiSecret });
    alert("Settings saved!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Extension Options</h1>
    </div>
  );
};

ReactDOM.render(<Options />, document.getElementById("root"));
