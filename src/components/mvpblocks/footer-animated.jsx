import React from "react";
import { Github, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

const FooterAnimated = ({
  onHomeClick,
  onAboutClick,
  onEducationClick,
  onExperienceClick,
  onProjectsClick,
  onSkillsClick,
  onContactClick,
}) => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", onClick: onHomeClick },
    { name: "About", onClick: onAboutClick },
    { name: "Education", onClick: onEducationClick },
    { name: "Experience", onClick: onExperienceClick },
    { name: "Projects", onClick: onProjectsClick },
    { name: "Skills", onClick: onSkillsClick },
    { name: "Contact", onClick: onContactClick },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Seddik-Dev",
      ariaLabel: "Visit my GitHub profile",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:seddikzaker11@gmail.com",
      ariaLabel: "Send me an email",
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full mt-20 bg-black">
      {/* Outer container with boxed background */}
      <div className="relative max-w-7xl mx-auto px-4 bg-black">
        <div className="relative bg-black/80 backdrop-blur-sm border border-[#3DFFFF]/30 rounded-3xl shadow-[0_-8px_32px_rgba(0,255,255,0.12)] overflow-hidden">
          {/* Background Pattern (matches App.jsx pattern units) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="footer-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#3DFFFF"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#footer-grid)" />
            </svg>
          </div>

          <div className="relative px-4 sm:px-6 md:px-8 py-12 md:py-16">
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Seddik <span className="text-[#3DFFFF]">Zaker</span>
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Full Stack Web Developer
                </p>
                <p className="text-white/60 text-xs">
                  Building modern web solutions with passion and precision.
                </p>
              </div>

              {/* Navigation Links */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Navigation
                </h4>
                <nav className="flex flex-col gap-3">
                  {navigationLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={link.onClick}
                      className="relative group text-white/70 hover:text-[#3DFFFF] transition-colors duration-300 text-sm text-left md:text-center lg:text-left"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#3DFFFF] transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contact & Social */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Connect
                </h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:seddikzaker11@gmail.com"
                    className="flex items-center gap-2 text-white/70 hover:text-[#3DFFFF] transition-colors text-sm group"
                  >
                    <Mail size={16} className="text-[#3DFFFF]" />
                    <span>seddikzaker11@gmail.com</span>
                  </a>
                  <a
                    href="tel:+212762571130"
                    className="flex items-center gap-2 text-white/70 hover:text-[#3DFFFF] transition-colors text-sm group"
                  >
                    <Phone size={16} className="text-[#3DFFFF]" />
                    <span>+212 762571130</span>
                  </a>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <MapPin size={16} className="text-[#3DFFFF]" />
                    <span>Casablanca, Morocco</span>
                  </div>
                  <div className="flex gap-4 mt-2 justify-center md:justify-start">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.ariaLabel}
                          className="w-10 h-10 rounded-full bg-black/40 border border-[#3DFFFF]/20 hover:border-[#3DFFFF] hover:bg-[#3DFFFF]/20 flex items-center justify-center transition-all duration-300 group"
                        >
                          <Icon
                            size={18}
                            className="text-white/70 group-hover:text-[#3DFFFF] transition-colors"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#3DFFFF]/10 my-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-xs text-center md:text-left">
                © {currentYear} Seddik Zaker. All rights reserved.
              </p>
              <button
                onClick={handleScrollToTop}
                className="flex items-center gap-2 text-white/70 hover:text-[#3DFFFF] transition-colors text-xs group"
                aria-label="Scroll to top"
              >
                <span>Back to top</span>
                <ArrowUp
                  size={16}
                  className="group-hover:translate-y-[-2px] transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAnimated;
