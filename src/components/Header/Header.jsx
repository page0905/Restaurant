import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMobileMenu from "../../hooks/useMobileMenu";
import { useScroll } from "../../hooks/useScroll";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();
  const { scrolled, activeSection } = useScroll();

  const navItems = [
    { id: "hero", path: "/", label: "Home" },
    { id: "about", path: "/about", label: "About" },
    { id: "menu", path: "/menu", label: "Menu" },
    { id: "gallery", path: "/gallery", label: "Gallery" },
    { id: "contact", path: "/contact", label: "Contact" },
  ];

  const handleNavigation = (id, fallbackPath) => {
    if (location.pathname === "/" || location.pathname === "/Restaurant") {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight =
          document.getElementById("header")?.offsetHeight || 0;
        const offsetPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        closeMobileMenu();
        return;
      }
    }
    navigate(fallbackPath);
    closeMobileMenu();
  };

  return (
    <header
      id="header"
      className={`fixed-top ${
        scrolled || isMobileMenuOpen ? "header-scrolled" : ""
      } ${isMobileMenuOpen ? "menu-open" : ""}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between w-100">
        <div className="d-none d-lg-block" style={{ width: "150px" }}></div>
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
          <nav className="navbar">
            <ul className="nav-list d-flex align-items-center mb-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav-link scrollto ${
                      location.pathname === "/" && activeSection === item.id
                        ? "active"
                        : location.pathname === item.path
                        ? "active"
                        : ""
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
        </div>

        <Link
          to="/booking"
          className="book-a-table-btn scrollto d-none d-lg-flex"
          onClick={closeMobileMenu}
        >
          Book a Table
        </Link>

        <div className="mobile-nav-toggle d-lg-none" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </div>
      </div>

      <>
        <div className={`mobile-panel ${isMobileMenuOpen ? "show" : ""}`}>
          <ul className="panel-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${
                    location.pathname === "/" && activeSection === item.id
                      ? "active"
                      : location.pathname === item.path
                      ? "active"
                      : ""
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
            <li>
              <Link
                to="/booking"
                className="panel-book-btn"
                onClick={closeMobileMenu}
              >
                Book a Table
              </Link>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div className="drawer-overlay" onClick={closeMobileMenu}></div>
        )}
      </>
    </header>
  );
};

export default Header;
