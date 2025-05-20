"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="https://roxmotor.kz/storage/benefits/December2024/l8CZCYoUJal7R22SGmCE.webp"
          alt="ROX01"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-16 flex flex-col justify-center items-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/configuration">{t('hero.button')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
