import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const Navlink = [
    { id: 1, link: "Home", path: "/" },
    { id: 2, link: "About", path: "/about" },
    { id: 3, link: "Skills", path: "/skills" },
    { id: 4, link: "Education", path: "/education" },
    { id: 5, link: "Experience", path: "/experience" },
    { id: 6, link: "Service", path: "/service" },
    { id: 7, link: "Blog", path: "/blog" },
    { id: 8, link: "Contact", path: "/contact" },
  ];

  return (
    <nav className="text-center m-8 hover:text-sky-blue-400 ">
      <ul>
        {Navlink.map((link) => (
          <li className="" key={link.id}>
            <Link to={link.path} className="p-2 hover:text-blue-600">
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
