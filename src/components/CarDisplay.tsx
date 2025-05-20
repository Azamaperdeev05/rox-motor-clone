"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";

interface CarColor {
  id: string;
  name: TranslationKey;
  hex: string;
  image: string;
}

const colors: CarColor[] = [
  { id: "white", name: "car.color.white", hex: "#FFFFFF", image: "https://ext.same-assets.com/964890150/99191941.webp" },
  { id: "black", name: "car.color.black", hex: "#212020", image: "https://ext.same-assets.com/964890150/3246946396.webp" },
  { id: "gray", name: "car.color.gray", hex: "#868E95", image: "https://ext.same-assets.com/964890150/3365328880.webp" },
  { id: "brown", name: "car.color.brown", hex: "#827665", image: "https://ext.same-assets.com/964890150/2784361665.webp" },
  { id: "silver", name: "car.color.silver", hex: "#f6f6f7", image: "https://ext.same-assets.com/964890150/1152588921.webp" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function CarDisplay() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const delta = e.clientX - startX;
      setStartX(e.clientX);
      setAngle((prevAngle) => (prevAngle + delta) % 360);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const delta = e.touches[0].clientX - startX;
      setStartX(e.touches[0].clientX);
      setAngle((prevAngle) => (prevAngle + delta) % 360);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-fluid">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="section-title text-center"
        >
          {t('car.title')}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://ext.same-assets.com/964890150/3246946396.webp"
              alt="ROX01 Side View"
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">{t('car.subtitle')}</h3>
            <p className="text-gray-700 mb-6">
              {t('car.description')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {t('car.features.1')}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {t('car.features.2')}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                {t('car.features.3')}
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-4">
            {colors.map((color) => (
              <motion.button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColor.id === color.id ? "border-black scale-110" : "border-gray-300"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${t(color.name)} color`}
              >
                <span className="sr-only">{t(color.name)}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg font-medium shadow-lg"
            asChild
          >
            <a href="/configuration">{t('car.configure')}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
