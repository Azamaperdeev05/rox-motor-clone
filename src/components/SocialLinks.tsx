"use client";

import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export function SocialLinks() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      url: "https://facebook.com/roxmotors",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/roxmotors",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/roxmotors",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/roxmotors",
      icon: <Youtube className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">{t("footer.social")}</h3>
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            className="rounded-full"
            asChild
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
} 