import React from "react";

const MobileMenu = ({ setMenuOpen }) => {
  return (
    <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-6 py-8">
      <ul className="flex flex-col space-y-6 text-white">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="block text-xl hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)} // close menu when link clicked
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
