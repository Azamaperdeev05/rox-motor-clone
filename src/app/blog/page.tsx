"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, TranslationKey } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "ROX01: The Future of Electric SUVs",
    description: "Discover how ROX01 is revolutionizing the electric SUV market with its innovative features and sustainable design.",
    image: "https://ext.same-assets.com/964890150/2346048468.webp",
    date: "2024-03-15",
    category: "News",
  },
  {
    id: "2",
    title: "Sustainable Manufacturing at ROX Motors",
    description: "Learn about our commitment to sustainable manufacturing practices and how we're reducing our environmental impact.",
    image: "https://ext.same-assets.com/964890150/2346048468.webp",
    date: "2024-03-10",
    category: "Sustainability",
  },
  {
    id: "3",
    title: "The Technology Behind ROX01",
    description: "Explore the cutting-edge technology that powers ROX01 and sets new standards in the electric vehicle industry.",
    image: "https://ext.same-assets.com/964890150/2346048468.webp",
    date: "2024-03-05",
    category: "Technology",
  },
  {
    id: "4",
    title: "ROX01 Safety Features",
    description: "A comprehensive overview of the advanced safety features that make ROX01 one of the safest electric SUVs on the market.",
    image: "https://ext.same-assets.com/964890150/2346048468.webp",
    date: "2024-03-01",
    category: "Safety",
  },
];

export default function BlogPage() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="container-fluid py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          {t("blog.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-center mb-8"
        >
          {t("blog.subtitle")}
        </motion.p>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder={t("blog.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            {t("blog.all")}
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Button variant="outline" className="w-full">
                  {t("blog.readMore")}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 