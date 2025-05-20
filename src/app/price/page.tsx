'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from '@/lib/translations';
import { motion } from "framer-motion";
import { useState } from "react";

interface Configuration {
  id: string;
  name: TranslationKey;
  price: number;
  features: TranslationKey[];
}

const configurations: Configuration[] = [
  {
    id: 'standard',
    name: 'price.standard.title',
    price: 45000000,
    features: [
      'price.feature.battery',
      'price.feature.range',
      'price.feature.charging',
      'price.feature.interior'
    ]
  },
  {
    id: 'premium',
    name: 'price.premium.title',
    price: 55000000,
    features: [
      'price.feature.battery',
      'price.feature.range',
      'price.feature.charging',
      'price.feature.interior',
      'price.feature.speed'
    ]
  },
  {
    id: 'luxury',
    name: 'price.luxury.title',
    price: 65000000,
    features: [
      'price.feature.battery',
      'price.feature.range',
      'price.feature.charging',
      'price.feature.interior',
      'price.feature.speed',
      'price.feature.warranty'
    ]
  }
];

export default function PricePage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [selectedConfig, setSelectedConfig] = useState('premium');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₸';
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('price.title')}</h1>
            <p className="text-xl text-gray-300">{t('price.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {configurations.map((config) => (
              <motion.div
                key={config.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`p-8 rounded-lg border ${
                  selectedConfig === config.id
                    ? 'border-primary bg-gray-900'
                    : 'border-gray-800 bg-gray-800/50'
                }`}
                onClick={() => setSelectedConfig(config.id)}
              >
                <h3 className="text-2xl font-bold mb-4">{t(config.name)}</h3>
                <div className="text-3xl font-bold text-primary mb-6">
                  {formatPrice(config.price)}
                </div>
                <ul className="space-y-4">
                  {config.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {t(feature)}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-lg ${
                    selectedConfig === config.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {t('price.select')}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{t('price.financing.title')}</h2>
            <p className="text-gray-300 mb-8">{t('price.financing.description')}</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg">
              {t('price.financing.button')}
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}