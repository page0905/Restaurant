import { useState, useEffect } from "react";

const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const navbar = document.getElementById("navbar");
      const mobileToggle = document.querySelector(".mobile-nav-toggle");

      if (
        navbar &&
        mobileToggle &&
        !navbar.contains(e.target) &&
        !mobileToggle.contains(e.target) &&
        isMobileMenuOpen
      ) {
        closeMobileMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 991 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};

export default useMobileMenu;
