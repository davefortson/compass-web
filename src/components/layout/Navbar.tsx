"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CompassLogo } from "../ui/CompassLogo";
import { Button } from "../ui/Button";
import { NAV_LINKS, CALENDAR_URL } from "../../lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const handleLeadCaptureClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector("#lead-capture");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  // Dynamic colors: white when over dark hero, dark when scrolled to white bg
  const textColor = scrolled ? "#202020" : "#FFFFFF";
  const mutedTextColor = scrolled ? "rgba(32,32,32,0.6)" : "rgba(255,255,255,0.6)";
  const borderColor = scrolled ? "#D2D5D9" : "rgba(255,255,255,0.3)";

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: scrolled ? "#FFFFFF" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <CompassLogo light={!scrolled} />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="uppercase tracking-widest text-sm font-medium transition-colors duration-300 hover:opacity-70"
                  style={{
                    fontFamily: "'Mulish', sans-serif",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    color: textColor,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="uppercase text-xs font-semibold"
                  style={{
                    fontFamily: "'Mulish', sans-serif",
                    letterSpacing: "1px",
                    borderRadius: "2px",
                    border: `1px solid ${borderColor}`,
                    backgroundColor: "transparent",
                    color: textColor,
                    padding: "10px 20px",
                    fontSize: "13px",
                  }}
                >
                  BOOK A DEMO
                </Button>
              </a>
              <button
                onClick={handleLeadCaptureClick}
                className="uppercase text-xs font-semibold text-white cursor-pointer"
                style={{
                  fontFamily: "'Mulish', sans-serif",
                  letterSpacing: "1px",
                  borderRadius: "2px",
                  background:
                    "linear-gradient(204.4deg, #2A9D8F, #4FB573, #E9C46A)",
                  padding: "10px 20px",
                  fontSize: "13px",
                  border: "none",
                }}
              >
                GET FREE PROTOTYPE
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              style={{ color: textColor }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden"
            style={{ paddingTop: "80px" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="uppercase tracking-widest text-lg font-medium transition-colors duration-200 hover:opacity-70"
                  style={{
                    fontFamily: "'Mulish', sans-serif",
                    fontSize: "18px",
                    letterSpacing: "1px",
                    color: "#202020",
                  }}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-xs">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="secondary"
                    className="uppercase text-sm font-semibold w-full text-center"
                    style={{
                      fontFamily: "'Mulish', sans-serif",
                      letterSpacing: "1px",
                      borderRadius: "2px",
                      border: "1px solid #D2D5D9",
                      backgroundColor: "transparent",
                      color: "#202020",
                      padding: "14px 24px",
                      fontSize: "14px",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    BOOK A DEMO
                  </Button>
                </a>
                <button
                  onClick={handleLeadCaptureClick}
                  className="uppercase text-sm font-semibold text-white w-full cursor-pointer"
                  style={{
                    fontFamily: "'Mulish', sans-serif",
                    letterSpacing: "1px",
                    borderRadius: "2px",
                    background:
                      "linear-gradient(204.4deg, #2A9D8F, #4FB573, #E9C46A)",
                    padding: "14px 24px",
                    fontSize: "14px",
                    border: "none",
                  }}
                >
                  GET FREE PROTOTYPE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
