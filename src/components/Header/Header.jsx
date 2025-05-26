import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id, fallbackPath) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const offsetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setMobileMenuOpen(false);
        return;
      }
    }

    window.location.href = fallbackPath;
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", path: "/", label: "Home" },
    { id: "about", path: "/about", label: "About" },
    { id: "menu", path: "/menu", label: "Menu" },

    { id: "gallery", path: "/gallery", label: "Gallery" },
    { id: "contact", path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (location.pathname === "/" &&
        location.hash.includes(path.replace("/", "")))
    );
  };

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-center">
        <div className="nav-wrapper d-flex align-items-center gap-4">
          <nav
            id="navbar"
            className={`navbar d-flex align-items-center ${
              mobileMenuOpen ? "navbar-mobile" : ""
            }`}
          >
            <ul className="d-flex align-items-center gap-4 mb-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav-link scrollto ${
                      isActive(item.path) ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id, item.path);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book a Table */}
          <Link
            to="/booking"
            className="book-a-table-btn scrollto d-none d-lg-flex ms-5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Table
          </Link>
        </div>

        {/* Toggle Icon (Mobile only) */}
        <div
          className="mobile-nav-toggle d-lg-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
