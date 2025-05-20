"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, X, Globe, Phone, Menu } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/translations";
import { translations, TranslationKey } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = (key: TranslationKey) => translations[language][key];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: t('nav.rox') },
    { href: "/price", label: t('nav.price') },
    { href: "/configuration", label: t('nav.rox01') },
    { href: "/manuals", label: t('nav.manuals') },
    { href: "/warranty", label: t('nav.warranty') },
    { href: "/gallery", label: t('nav.gallery') },
  ];

  interface LanguageOption {
    code: Language;
    label: string;
  }

  const languages: LanguageOption[] = [
    { code: 'ru', label: t('language.ru') },
    { code: 'kk', label: t('language.kk') },
    { code: 'en', label: t('language.en') },
  ];

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container-fluid">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold">
              ROX
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-64">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.label}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
