'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from '@/lib/translations';
import { motion } from "framer-motion";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-gray-300">{t('about.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-300 mb-6">{t('about.mission.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
              <p className="text-gray-300 mb-6">{t('about.vision.description')}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">{t('about.history.title')}</h2>
            <div className="space-y-8">              {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                <div key={year} className="flex items-start gap-4">
                  <div className="w-24 text-primary font-bold">
                    {t(`about.history.year${year}` as TranslationKey)}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      {t(`about.history.title${year}` as TranslationKey)}
                    </h3>
                    <p className="text-gray-300">
                      {t(`about.history.description${year}` as TranslationKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-8">{t('about.values.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">              {['innovation', 'sustainability', 'quality'].map((value) => (
                <div key={value} className="p-6 bg-gray-900 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    {t(`about.values.${value}.title` as TranslationKey)}
                  </h3>
                  <p className="text-gray-300">
                    {t(`about.values.${value}.description` as TranslationKey)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}