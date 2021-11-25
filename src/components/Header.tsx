import React from "react";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="hero">
          <div className="navigation">
            <div className="hamburger">
              <button>
                <svg
                  className="open-button"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="5" width="16" height="2" />
                  <rect x="4" y="11" width="16" height="2" />
                  <rect x="4" y="17" width="16" height="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
