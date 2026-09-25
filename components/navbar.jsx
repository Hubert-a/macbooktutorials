import { navLinks } from "@/libs/data";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src={"/logo.svg"} alt="Apple logo" />
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src={"/search.svg"} alt="Search" />
          </button>
          <button>
            <img src={"/cart.svg"} alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
