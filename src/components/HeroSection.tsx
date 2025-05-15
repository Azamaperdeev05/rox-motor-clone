"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <section className="hero-section relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ext.same-assets.com/964890150/2784361665.webp"
          alt="ROX01 SUV"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="hero-content relative z-10 flex flex-col items-start max-w-2xl px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white mb-8 max-w-md"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/configuration">
            <Button className="bg-white text-black hover:bg-white/90 font-medium px-6 py-3 text-lg">
              {t('hero.button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
