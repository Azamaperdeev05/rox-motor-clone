"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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

export function SpecificationsSection() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  const specs = [
    { value: "5,295", label: t('specs.length') },
    { value: "1,980", label: t('specs.width') },
    { value: "1,869", label: t('specs.height') },
    { value: "3,010", label: t('specs.wheelbase') },
    { value: "2,000", label: t('specs.weight') },
    { value: "5", label: t('specs.seats') },
    { value: "500", label: t('specs.trunk') },
    { value: "0-100", label: t('specs.acceleration') },
  ];

  const comfortSpecs = [
    { value: "«Zero Gravity»", label: t('specs.seats') },
    { value: "Полностью", label: t('specs.leather') },
    { value: "3-х зонный", label: t('specs.climate') },
    { value: "9-дюймовый", label: t('specs.display') },
  ];

  const performanceSpecs = [
    { value: "1,115", label: t('specs.range') },
    { value: "235", label: t('specs.speed') },
    { value: "5.5", label: t('specs.acceleration') },
    { value: "4.4", label: t('specs.v2l') },
  ];

  const safetySpecs = [
    { value: ">87%", label: t('specs.steel') },
    { value: ">32%", label: t('specs.aluminum') },
    { value: "159,730Ч", label: t('specs.tests') },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('specs.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('specs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
              <div className="text-gray-600">{spec.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
