import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Instagram Unfollowers 🚀</h1>
      <p>Giriş yap butonu buraya gelecek.</p>
      <button onClick={() => alert("Giriş işlemi buradan devam edecek")}>
        Giriş Yap
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
