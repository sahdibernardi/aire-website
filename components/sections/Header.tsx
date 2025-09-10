"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full pt-2 px-2 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-aire-white/95 backdrop-blur-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 h-20">
          <Image src="/logoLung.svg" alt="AIRE Logo" width={60} height={30} />
          <Image 
            src={isScrolled ? "/aireRosa.svg" : "/aireBranco.svg"} 
            alt="AIRE" 
            width={120} 
            height={60} 
            className="transition-all duration-300 object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link 
            href="#" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Início
          </Link>
          <Link 
            href="#" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Sobre
          </Link>
          <Link 
            href="#" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Serviços
          </Link>
          <Link   
            href="#" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Atendimento
          </Link>
          <Link 
            href="#" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <HiX 
              size={24} 
              className={`transition-colors ${
                isScrolled ? "text-aire-slate" : "text-white"
              }`}
            />
          ) : (
            <HiMenu 
              size={24} 
              className={`transition-colors ${
                isScrolled ? "text-aire-slate" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div 
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
            isScrolled 
              ? "bg-aire-white/95 backdrop-blur-sm" 
              : "bg-black/90 backdrop-blur-sm"
          }`}
        >
          <nav className="flex flex-col py-4">
            <Link 
              href="#" 
              className={`px-6 py-3 transition-colors font-bold ${
                isScrolled 
                  ? "text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20" 
                  : "text-white hover:text-aire-cream hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="#" 
              className={`px-6 py-3 transition-colors font-bold ${
                isScrolled 
                  ? "text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20" 
                  : "text-white hover:text-aire-cream hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="#" 
              className={`px-6 py-3 transition-colors font-bold ${
                isScrolled 
                  ? "text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20" 
                  : "text-white hover:text-aire-cream hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="#" 
              className={`px-6 py-3 transition-colors font-bold ${
                isScrolled 
                  ? "text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20" 
                  : "text-white hover:text-aire-cream hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Atendimento
            </Link>
            <Link 
              href="#" 
              className={`px-6 py-3 transition-colors font-bold ${
                isScrolled 
                  ? "text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20" 
                  : "text-white hover:text-aire-cream hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
