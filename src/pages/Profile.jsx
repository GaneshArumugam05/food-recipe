import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">Profile</h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Settings</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 dark:text-gray-300">Theme:</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-orange-500 text-white dark:bg-orange-400 dark:text-black"
          >
            {dark ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}
