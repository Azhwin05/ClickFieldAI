import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '/technology' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled || location.pathname !== '/' ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={cn(
                "text-2xl font-medium tracking-tight text-white transition-all duration-300",
                location.pathname === '/' && !isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
              )}
            >
              ClickField<span className="text-white/50">AI</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/60 hover:text-white px-3 py-2 rounded-md text-xs uppercase tracking-widest font-mono transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-widest font-mono h-9 px-6" asChild>
                <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
               <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                 <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
               </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
