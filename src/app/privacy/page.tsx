'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { translations } from '@/lib/translations';
import { motion } from "framer-motion";

const sections = [
  {
    id: 'collection',
    title: 'privacy.collection.title',
    content: 'privacy.collection.content'
  },
  {
    id: 'usage',
    title: 'privacy.usage.title',
    content: 'privacy.usage.content'
  },
  {
    id: 'sharing',
    title: 'privacy.sharing.title',
    content: 'privacy.sharing.content'
  },
  {
    id: 'security',
    title: 'privacy.security.title',
    content: 'privacy.security.content'
  },
  {
    id: 'cookies',
    title: 'privacy.cookies.title',
    content: 'privacy.cookies.content'
  },
  {
    id: 'rights',
    title: 'privacy.rights.title',
    content: 'privacy.rights.content'
  }
];

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('privacy.title')}</h1>
            <p className="text-xl text-gray-300">{t('privacy.subtitle')}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-900 rounded-lg"
              >
                <h2 className="text-2xl font-bold mb-4">{t(section.title)}</h2>
                <div className="prose prose-invert">
                  {t(section.content).split('\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gray-900 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-gray-300 mb-4">{t('privacy.contact.description')}</p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>{t('privacy.contact.email')}:</strong>{' '}
                  <a href="mailto:privacy@roxmotors.com" className="text-primary hover:text-primary/80">
                    privacy@roxmotors.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>{t('privacy.contact.phone')}:</strong>{' '}
                  <a href="tel:+77271234567" className="text-primary hover:text-primary/80">
                    +7 (727) 123-45-67
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>{t('privacy.contact.address')}:</strong>{' '}
                  {t('privacy.contact.address.value')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center text-gray-400 text-sm"
            >
              <p>{t('privacy.lastUpdated')}: {t('privacy.lastUpdated.date')}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 