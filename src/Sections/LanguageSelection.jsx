import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelection() {
  const { i18n } = useTranslation();

  // Map human-readable names to language codes
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "pa", label: "ਪੰਜਾਬੀ" },
    { code: "bn", label: "বাংলা" },
    { code: "ta", label: "தமிழ்" },
    { code: "te", label: "తెలుగు" },
    { code: "mr", label: "मराठी" },
    { code: "gu", label: "ગુજરાતી" },
  ];

  return (
    <div className="relative group">
      {/* Dropdown button */}
      <button className="text-white px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center gap-2">
        🌐 {languages.find((l) => l.code === i18n.language)?.label || "English"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown list */}
      <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
        {languages.map((lang) => (
          <li
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)} // 👈 updates language globally
            className="px-4 py-2 hover:bg-green-100 cursor-pointer"
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
