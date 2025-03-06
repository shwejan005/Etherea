"use client";

import { motion } from "framer-motion";
import { LucideBrain, LucideBookOpen, LucideZap } from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function About() {
  return (
    <div className={`${dmSans.className} min-h-screen bg-[#0F172A] text-white`}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl font-bold text-blue-500">About EduAI</h1>
        <p className="text-lg text-gray-300 mt-2">
          Your AI-powered learning companion for Math, Physics, and Chemistry.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1: AI-Powered Tutor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-blue-600"
        >
          <LucideBrain className="h-10 w-10 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">AI-Powered Tutor</h2>
          <p className="text-gray-300 mt-2">
            Get instant, step-by-step explanations powered by advanced **LLMs** like Gemini, LLaMA, and ChatGPT.
          </p>
        </motion.div>

        {/* Feature 2: Multimodal Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-blue-600"
        >
          <LucideBookOpen className="h-10 w-10 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">Multimodal Learning</h2>
          <p className="text-gray-300 mt-2">
            Upload handwritten notes or textbook pages. Our OCR converts them into digital text for easy understanding.
          </p>
        </motion.div>

        {/* Feature 3: Personalized Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-blue-600"
        >
          <LucideZap className="h-10 w-10 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">Personalized Learning</h2>
          <p className="text-gray-300 mt-2">
            AI adapts explanations to your grade level and learning speed, tracking progress with smart recommendations.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 pb-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/ai"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
        >
          Start Learning Now →
        </motion.a>
      </div>
    </div>
  );
}