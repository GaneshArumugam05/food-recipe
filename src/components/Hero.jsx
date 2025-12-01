import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onSearch }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-extrabold mb-4 text-orange-600">Discover recipes you'll love</h1>
        <p className="text-gray-600 mb-6">Search by ingredient, time or dietary preference. Clean UI, fast interactions, and delightful micro-animations.</p>
        <div className="flex gap-3">
          <input
            onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
            placeholder="Search recipes, tags or time (eg. vegan, 30 mins)"
            className="w-full p-3 rounded-full shadow-sm border"
          />
          <button onClick={() => onSearch("")} className="px-4 py-2 rounded-full bg-orange-500 text-white">Explore</button>
        </div>
      </motion.div>
      <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="card h-64 flex items-center justify-center bg-gray-100 rounded-2xl">
          <p className="text-center text-gray-600">Beautiful hero image here</p>
        </div>
      </motion.div>
    </section>
  );
}
