import React from 'react';
import { motion } from 'framer-motion';

export default function FilterBar({ tags = [], onFilter }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-gray-700">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilter('')}
          className="flex-shrink-0 px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-lg"
        >
          All
        </motion.button>
        {tags.map((tag) => (
          <motion.button
            key={tag}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilter(tag)}
            className="flex-shrink-0 px-4 py-2 rounded-full border border-orange-500 text-orange-500 font-semibold shadow-sm hover:bg-orange-500 hover:text-white transition"
          >
            {tag}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
