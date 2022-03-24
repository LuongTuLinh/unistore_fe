import React from "react";

export default function Header() {
  return (
    <div>
      {/* Navbar*/}
      <header className="app-header">
        {/* Navbar Right Menu*/}
        <ul className="app-nav">
          {/* User Menu*/}
          <li>
            <a className="app-nav__item" href="/home">
              <i className="bx bx-log-out bx-rotate-180" />{" "}
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
