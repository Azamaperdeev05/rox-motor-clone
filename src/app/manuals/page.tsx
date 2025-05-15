'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { translations } from '@/lib/translations';
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const manuals = [
  {
    id: 'user',
    title: 'manuals.user.title',
    description: 'manuals.user.description',
    size: '2.4 MB',
    format: 'PDF',
    url: '/manuals/user-manual.pdf'
  },
  {
    id: 'service',
    title: 'manuals.service.title',
    description: 'manuals.service.description',
    size: '4.8 MB',
    format: 'PDF',
    url: '/manuals/service-manual.pdf'
  },
  {
    id: 'warranty',
    title: 'manuals.warranty.title',
    description: 'manuals.warranty.description',
    size: '1.2 MB',
    format: 'PDF',
    url: '/manuals/warranty.pdf'
  },
  {
    id: 'safety',
    title: 'manuals.safety.title',
    description: 'manuals.safety.description',
    size: '3.1 MB',
    format: 'PDF',
    url: '/manuals/safety-manual.pdf'
  }
];

export default function ManualsPage() {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('manuals.title')}</h1>
            <p className="text-xl text-gray-300">{t('manuals.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manuals.map((manual, index) => (
              <motion.div
                key={manual.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-900 rounded-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{t(manual.title)}</h2>
                    <p className="text-gray-300">{t(manual.description)}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {manual.size} • {manual.format}
                  </div>
                </div>
                <a
                  href={manual.url}
                  download
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('manuals.download')}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-gray-900 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">{t('manuals.support.title')}</h2>
            <p className="text-gray-300 mb-4">{t('manuals.support.description')}</p>
            <a
              href="mailto:support@roxmotors.com"
              className="text-primary hover:text-primary/80"
            >
              support@roxmotors.com
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
 