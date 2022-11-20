import React from "react";

const ThemeToggle = () => {
  return (
    <div className="themeToggle">
      <p className="themeText">Light</p>
      <div className="toggleContainer light">
        <div className="toggleContent tgLight"></div>
      </div>
      <p>Dark</p>
    </div>
  );
};

export default ThemeToggle;
