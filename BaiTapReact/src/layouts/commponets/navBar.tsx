import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="container">
          <Link className="btn" to="/video1">Video1</Link>
          <Link className="btn" to="/video2">Video2</Link>
          <svg
            className="outline"
            overflow="visible"
            height="40"
            width="100%"
            viewBox="0 0 100% 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="rect"
              pathLength="100"
              y="0"
              x="0"
              height="60"
              width="100%"
              fill="transparent"
            ></rect>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
