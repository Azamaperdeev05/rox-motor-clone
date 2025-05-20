'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from '@/lib/translations';
import { motion } from "framer-motion";

interface WarrantyItem {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
  period: string;
}

const warrantyItems: WarrantyItem[] = [
  {
    id: 'battery',
    title: 'warranty.terms.2',
    description: 'warranty.battery.description',
    period: '8 years'
  },
  {
    id: 'motor',
    title: 'warranty.terms.1',
    description: 'warranty.motor.description',
    period: '5 years'
  },
  {
    id: 'body',
    title: 'warranty.terms.3',
    description: 'warranty.body.description',
    period: '5 years'
  },
  {
    id: 'paint',
    title: 'warranty.terms.4',
    description: 'warranty.paint.description',
    period: '3 years'
  }
];

export default function WarrantyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('warranty.title')}</h1>
            <p className="text-xl text-gray-300">{t('warranty.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {warrantyItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-900 rounded-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{t(item.title)}</h2>
                    <p className="text-gray-300">{t(item.description)}</p>
                  </div>
                  <div className="text-primary font-bold">{item.period}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{t('warranty.terms.title')}</h2>
              <div className="space-y-4">                {[1, 2, 3, 4].map((num) => {
                  const translationKey = `warranty.terms.${num}` as TranslationKey;
                  return (
                    <div key={num} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0">
                        {num}
                      </div>
                      <p className="text-gray-300">{t(translationKey)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-gray-900 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{t('warranty.service.title')}</h2>
              <p className="text-gray-300 mb-6">{t('warranty.service.description')}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                {['phone', 'email', 'chat'].map((method) => {
                  const titleKey = `warranty.service.${method}.title` as TranslationKey;
                  const descriptionKey = `warranty.service.${method}.description` as TranslationKey;
                  return (
                    <div key={method} className="p-4 bg-gray-800 rounded-lg">
                      <h3 className="font-bold mb-2">{t(titleKey)}</h3>
                      <p className="text-gray-300">{t(descriptionKey)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}