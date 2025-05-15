"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = {
  exterior: [
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Exterior Front",
    },
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Exterior Side",
    },
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Exterior Back",
    },
  ],
  interior: [
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Interior Front",
    },
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Interior Back",
    },
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Interior Dashboard",
    },
  ],
  details: [
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Wheel",
    },
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Headlight",
    },
    {
      src: "https://ext.same-assets.com/964890150/2346048468.webp",
      alt: "ROX01 Taillight",
    },
  ],
};

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [activeTab, setActiveTab] = useState<"exterior" | "interior" | "details">("exterior");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images[activeTab].length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images[activeTab].length) % images[activeTab].length);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-fluid py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          {t('gallery.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-center mb-8"
        >
          {t('gallery.subtitle')}
        </motion.p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={activeTab === "exterior" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("exterior");
              setCurrentImageIndex(0);
            }}
          >
            {t('gallery.exterior')}
          </Button>
          <Button
            variant={activeTab === "interior" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("interior");
              setCurrentImageIndex(0);
            }}
          >
            {t('gallery.interior')}
          </Button>
          <Button
            variant={activeTab === "details" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("details");
              setCurrentImageIndex(0);
            }}
          >
            {t('gallery.details')}
          </Button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeTab + currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="aspect-video relative overflow-hidden rounded-lg"
          >
            <img
              src={images[activeTab][currentImageIndex].src}
              alt={images[activeTab][currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-4 space-x-2">
            {images[activeTab].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
