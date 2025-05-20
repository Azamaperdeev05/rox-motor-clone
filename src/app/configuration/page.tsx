'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { translations } from '@/lib/translations';
import type { TranslationKey } from '@/lib/translations';
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const colors = [
  { id: 'white', name: 'car.color.white', price: 0 },
  { id: 'black', name: 'car.color.black', price: 0 },
  { id: 'gray', name: 'car.color.gray', price: 0 },
  { id: 'brown', name: 'car.color.brown', price: 500000 },
  { id: 'silver', name: 'car.color.silver', price: 500000 }
];

const wheels = [
  { id: 'standard', name: 'wheels.standard', price: 0 },
  { id: 'sport', name: 'wheels.sport', price: 1000000 },
  { id: 'luxury', name: 'wheels.luxury', price: 1500000 }
];

const interiors = [
  { id: 'standard', name: 'interior.standard', price: 0 },
  { id: 'premium', name: 'interior.premium', price: 2000000 },
];


export default function ConfigurationPage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedWheels, setSelectedWheels] = useState('standard');
  const [selectedInterior, setSelectedInterior] = useState('standard');
  const [isRotating, setIsRotating] = useState(false);

  const basePrice = 29900000; // Base price for 7-seater configuration
  const selectedColorPrice = colors.find(c => c.id === selectedColor)?.price ?? 0;
  const selectedWheelsPrice = wheels.find(w => w.id === selectedWheels)?.price ?? 0;
  const selectedInteriorPrice = interiors.find(i => i.id === selectedInterior)?.price ?? 0;
  const totalPrice = basePrice + selectedColorPrice + selectedWheelsPrice + selectedInteriorPrice;

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('config.title')}</h1>
            <p className="text-xl text-gray-300">{t('config.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/images/car-${selectedColor}-${selectedWheels}.png`}
                  alt="ROX01"
                  fill
                  className={`object-contain transition-transform duration-1000 ${
                    isRotating ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <button
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full"
                onClick={() => setIsRotating(!isRotating)}
              >
                {t('config.rotate')}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('config.color.title')}</h2>
                <div className="grid grid-cols-5 gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      className={`p-4 rounded-lg border ${
                        selectedColor === color.id
                          ? 'border-primary bg-gray-900'
                          : 'border-gray-800'
                      }`}
                      onClick={() => setSelectedColor(color.id)}
                    >
                      <div className="aspect-square rounded-full mb-2" style={{ backgroundColor: color.id }} />
                      <div className="text-sm">{t(color.name as TranslationKey)}</div>
                      {color.price > 0 && (
                        <div className="text-xs text-primary">+{formatPrice(color.price)}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">{t('config.wheels.title')}</h2>
                <div className="grid grid-cols-3 gap-4">
                  {wheels.map((wheel) => (
                    <button
                      key={wheel.id}
                      className={`p-4 rounded-lg border ${
                        selectedWheels === wheel.id
                          ? 'border-primary bg-gray-900'
                          : 'border-gray-800'
                      }`}
                      onClick={() => setSelectedWheels(wheel.id)}
                    >
                      <div className="aspect-square rounded-full mb-2 bg-gray-700" />
                      <div className="text-sm">{t(wheel.name as TranslationKey)}</div>
                      {wheel.price > 0 && (
                        <div className="text-xs text-primary">+{formatPrice(wheel.price)}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">{t('config.interior.title')}</h2>
                <div className="grid grid-cols-3 gap-4">
                  {interiors.map((interior) => (
                    <button
                      key={interior.id}
                      className={`p-4 rounded-lg border ${
                        selectedInterior === interior.id
                          ? 'border-primary bg-gray-900'
                          : 'border-gray-800'
                      }`}
                      onClick={() => setSelectedInterior(interior.id)}
                    >
                      <div className="aspect-square rounded-lg mb-2 bg-gray-700" />
                      <div className="text-sm">{t(interior.name as TranslationKey)}</div>
                      {interior.price > 0 && (
                        <div className="text-xs text-primary">+{formatPrice(interior.price)}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl">{t('config.total')}</span>
                  <span className="text-2xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-lg">
                  {t('config.order')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}