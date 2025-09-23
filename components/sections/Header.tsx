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
      className={`w-full max-w-full pt-2 px-2 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-aire-white/95 backdrop-blur-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 max-w-full">
        <div className="flex items-center space-x-2 sm:space-x-4 h-16 sm:h-20">
          <Image src="/logoLung.svg" alt="AIRE Logo" width={40} height={20} className="sm:w-[60px] sm:h-[30px]" />
          <Image 
            src={isScrolled ? "/aireRosa.svg" : "/aireBranco.svg"} 
            alt="AIRE" 
            width={80} 
            height={40} 
            className="sm:w-[120px] sm:h-[60px] transition-all duration-300 object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center itens-center space-x-12 w-[70%] justify-evenly">
          <Link 
            href="#inicio" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Início
          </Link>
          <Link 
            href="#sobre" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Sobre
          </Link>
          <Link 
            href="#servicos" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Serviços
          </Link>
          <Link   
            href="#atendimento" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Atendimento
          </Link>
          <Link 
            href="#contato" 
            className={`transition-colors font-bold ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
          >
            Contato
          </Link>
          <a
            href="https://www.instagram.com/airecardiopulmonar/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors hover:scale-110 ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
            aria-label="Siga-nos no Instagram"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile Menu and Instagram Button */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href="https://www.instagram.com/airecardiopulmonar/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-colors hover:scale-110 ${
              isScrolled 
                ? "text-aire-slate hover:text-aire-purple" 
                : "text-white hover:text-aire-cream"
            }`}
            aria-label="Siga-nos no Instagram"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <button
            className="p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX 
                size={28} 
                className="text-aire-slate"
              />
            ) : (
              <HiMenu 
                size={28} 
                className={`transition-colors ${
                  isScrolled ? "text-aire-slate" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed top-0 left-0 w-full h-screen transition-all duration-300 z-40 bg-aire-white/95 backdrop-blur-sm"
        >
          <div className="pt-20">
            <nav className="flex flex-col">
              <Link 
                href="#inicio" 
                className="px-6 py-4 text-lg transition-colors font-bold text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="#sobre" 
                className="px-6 py-4 text-lg transition-colors font-bold text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="#servicos" 
                className="px-6 py-4 text-lg transition-colors font-bold text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="#atendimento" 
                className="px-6 py-4 text-lg transition-colors font-bold text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Atendimento
              </Link>
              <Link 
                href="#contato" 
                className="px-6 py-4 text-lg transition-colors font-bold text-aire-slate hover:text-aire-purple hover:bg-aire-cream/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
