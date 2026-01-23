import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'home', name: 'Início' },
  { id: 'about', name: 'Sobre' },
  { id: 'projects', name: 'Projetos' },
  { id: 'cases', name: 'Cases' },
  { id: 'contato', name: 'Contato' },
];

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState(navLinks[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const updateIndicatorPosition = useCallback(() => {
    const activeTabIndex = navLinks.findIndex(tab => tab.id === activeTab);
    const activeTabElement = tabsRef.current[activeTabIndex];
    if (activeTabElement && indicatorRef.current && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();
      // Position indicator centered above the active tab
      const left = tabRect.left - navRect.left + (tabRect.width / 2) - (indicatorRef.current.offsetWidth / 2);
      indicatorRef.current.style.left = `${left}px`;
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicatorPosition();
    window.addEventListener('resize', updateIndicatorPosition);
    return () => window.removeEventListener('resize', updateIndicatorPosition);
  }, [updateIndicatorPosition]);

  useEffect(() => {
    if (location.pathname === '/') {
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      }, { 
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0 
      });

      sections.forEach(section => {
        if (section) observer.observe(section);
      });

      return () => {
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }
  }, [location.pathname]);

  const handleTabClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if(element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
          window.scrollTo({
               top: offsetPosition,
               behavior: "smooth"
          });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className="fixed top-8 left-0 right-0 z-50 p-2">
      <div className="container mx-auto flex items-center justify-between">
        <img 
          src="https://ik.imagekit.io/viihferreira/Logo_%C3%8Dcone_White.png?updatedAt=1757445076670" 
          alt="F2 Solutions Logo" 
          className="w-14 md:w-20 lg:w-16 md:absolute md:left-[2px] md:top-1/2 md:-translate-y-1/2" 
        />
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <div className="relative">
            <div 
              ref={indicatorRef} 
              className="absolute -top-1.5 h-1.5 w-6 bg-black rounded-full transition-all duration-300 ease-in-out"
              aria-hidden="true"
            ></div>
            <nav ref={navRef} className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg p-1.5 flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  ref={el => {tabsRef.current[index] = el}}
                  onClick={(e) => handleTabClick(link.id, e)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                  aria-current={activeTab === link.id ? 'page' : undefined}
                >
                  <span className={`relative z-10 transition-colors ${activeTab === link.id ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
                    {link.name}
                  </span>
                  {activeTab === link.id && (
                    <span
                      className="absolute inset-0 rounded-full bg-gray-100"
                      style={{ zIndex: 0 }}
                    ></span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-lg m-2">
          <nav className="flex flex-col items-center space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  handleTabClick(link.id, e);
                  setIsMobileMenuOpen(false);
                }}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 w-full text-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
