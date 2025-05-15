"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";

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

export function FeaturesSection() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-fluid">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="section-title text-center mb-12"
        >
          {t('features.title')}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex justify-center mb-16"
        >
          <img
            src="https://ext.same-assets.com/964890150/3246946396.webp"
            alt="ROX01 Side View"
            className="w-full max-w-5xl h-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold mb-6 text-center"
          >
            {t('features.shape.title')}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://ext.same-assets.com/964890150/3365328880.webp"
                alt="ROX01 Front"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-center"
            >
              <h4 className="text-xl font-semibold mb-4">{t('features.shape.subtitle')}</h4>
              <p className="text-gray-700">
                {t('features.shape.description')}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold mb-6 text-center"
          >
            {t('features.offroad.title')}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-center order-2 md:order-1"
            >
              <h4 className="text-xl font-semibold mb-4">{t('features.offroad.subtitle')}</h4>
              <p className="text-gray-700">
                {t('features.offroad.description')}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="rounded-lg overflow-hidden order-1 md:order-2 shadow-lg"
            >
              <img
                src="https://ext.same-assets.com/964890150/99191941.webp"
                alt="ROX01 Off-road"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Tabs defaultValue="comfort" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="comfort">{t('features.tabs.comfort')}</TabsTrigger>
              <TabsTrigger value="space">{t('features.tabs.space')}</TabsTrigger>
              <TabsTrigger value="smart">{t('features.tabs.smart')}</TabsTrigger>
            </TabsList>

            <TabsContent value="comfort" className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://ext.same-assets.com/964890150/1152588921.webp"
                    alt="Interior Comfort"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4">{t('features.comfort.title')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('features.comfort.description1')}
                  </p>
                  <p className="text-gray-700">
                    {t('features.comfort.description2')}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="space" className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://ext.same-assets.com/964890150/3052742853.webp"
                    alt="Interior Space"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4">{t('features.space.title')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('features.space.description1')}
                  </p>
                  <p className="text-gray-700">
                    {t('features.space.description2')}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="smart" className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://ext.same-assets.com/964890150/2894918188.webp"
                    alt="Smart Cockpit"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4">{t('features.smart.title')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('features.smart.description1')}
                  </p>
                  <p className="text-gray-700">
                    {t('features.smart.description2')}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Сравнение ROX01</h3>
          <Link href="/configuration">
            <Button className="bg-black text-white hover:bg-black/90 px-8 py-2">
              Подробнее
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
