"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  const navLinks = [
    { href: "/about", label: t('nav.rox') },
    { href: "/price", label: t('nav.price') },
    { href: "/configuration", label: t('nav.rox01') },
    { href: "/manuals", label: t('nav.manuals') },
  ];

  const socialLinks = [
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-fluid py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.about.title")}</h3>
            <p className="text-gray-400">{t("footer.about.description")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  {t("nav.rox")}
                </Link>
              </li>
              <li>
                <Link href="/price" className="text-gray-400 hover:text-white">
                  {t("nav.price")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  {t("nav.gallery")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contact.title")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t("footer.contact.address")}</li>
              <li>{t("footer.contact.phone")}</li>
              <li>{t("footer.contact.email")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.social")}</h3>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
