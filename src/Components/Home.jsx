import React, { useState, useEffect, useMemo } from "react";
import GeminiChat from "../Ai-assitants/geminiChat";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, BarChart, Bar
} from "recharts";

import { Link } from "react-router-dom";
import CropYieldAnalytics from "../Sections/CropYieldAnalytics";
import LanguageSelection from "../Sections/LanguageSelection";
import GovernmentSchemesSection from "../Sections/GovernmentSchemesSection";


const AgriSupportHome = () => {
  const [headerOpacity, setHeaderOpacity] = useState(0.9);
  const [showChat, setShowChat] = useState(false);

  // Weather (sample data, will later come from backend)
  const weatherData = [
    { day: "Mon", temp: 28 },
    { day: "Tue", temp: 30 },
    { day: "Wed", temp: 26 },
    { day: "Thu", temp: 27 },
    { day: "Fri", temp: 29 },
    { day: "Sat", temp: 31 },
    { day: "Sun", temp: 32 },
  ];

  // Pest Risk
  const pestRiskData = [
    { risk: "Low", value: 65 },
    { risk: "Moderate", value: 25 },
    { risk: "High", value: 10 },
  ];
  const COLORS = ["#16a34a", "#facc15", "#dc2626"];

  // Adoption Growth (Farmers using platform)
  const adoptionData = [
    { year: "2021", farmers: 500 },
    { year: "2022", farmers: 1800 },
    { year: "2023", farmers: 4200 },
    { year: "2024", farmers: 7500 },
    { year: "2025", farmers: 12000 },
  ];

  // Yield Improvement (AI vs Traditional)
  const yieldData = [
    { type: "Traditional", yield: 100 },
    { type: "With AI", yield: 145 },
  ];

  // Hero Images
  const images = [
    "https://img.freepik.com/premium-photo/indian-farmer-holding-crop-plant-his-wheat-field_35691-45213.jpg",
    "https://img.freepik.com/premium-photo/portrait-skilled-farmer-looking-rice-field-sunset-with-golden-ray-aig_31965-378540.jpg",
    "https://geographicbook.com/wp-content/uploads/2024/02/Agriculture-in-India-1.jpeg",
    "https://img.freepik.com/premium-photo/indian-farmer-working-traditional-way-with-bull-his-farm-indian-farming-scene_136354-2664.jpg?w=2000",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const opacity = Math.min(0.95, 0.7 + scrolled / 500);
      setHeaderOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Floating Particles
  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${4 + Math.random() * 4}s`,
      })),
    []
  );

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-600 rounded-full opacity-30 float-anim"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );

  // Progress Bar Component
  const ProgressBar = ({ percentage, delay = 0 }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }, [percentage, delay]);

    return (
      <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-600 to-blue-400 rounded-full transition-all ease-out"
          style={{
            width: `${width}%`,
            transitionDuration: "2000ms",
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-amber-50 to-blue-200 text-gray-800 overflow-x-hidden">
      <FloatingParticles />

      {/* Header */}
      
<header
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/20 transition-all duration-300"
  style={{ backgroundColor: `rgba(74, 124, 74, ${headerOpacity})` }}
>
  <div className="w-full px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="flex items-center gap-3 text-white">
      <span className="text-3xl animate-pulse">🌾</span>
      <h1 className="text-2xl font-bold">AgriSupport Pro</h1>
    </div>

    <nav className="w-full md:w-auto flex items-center gap-6">
      <ul className="flex flex-wrap justify-center md:justify-end gap-6 w-full">
        {["Home", "Dashboard", "Resources", "Support"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>
          </li>
        ))}
      </ul>

      {/* 🌐 Language Dropdown */}
      <LanguageSelection />
    </nav>
  </div>
</header>


      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Farm background"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-green-900/40"></div>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6 pt-32">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            Next-Gen Farming Intelligence
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl">
            AI-powered solutions for smarter agriculture — empowering farmers with
            insights, alerts, and recommendations.
          </p>
          <div className="mt-8 flex gap-6">
            <Link
          to="/login"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Open Dashboard
        </Link>
            <button
              onClick={() => setShowChat(true)}
              className="px-6 py-3 bg-amber-500 rounded-xl shadow-lg hover:bg-amber-600 transition"
            >
              Try AI Assistant
            </button>
           
          </div>
        </div>
      </section>

       {showChat && <GeminiChat onClose={() => setShowChat(false)} />}

      <main className="w-full px-8">
        {/* Alerts */}
        <section className="grid md:grid-cols-2 gap-6 py-16 w-full">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
            <div className="font-bold text-lg mb-2">🌧️ Weather Alert</div>
            <p>Heavy rainfall predicted for next 48 hours. AI recommends immediate drainage preparation.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
            <div className="font-bold text-lg mb-2">💡 Smart Tip</div>
            <p>New pesticide-free pest control method showing 94% effectiveness in trials.</p>
          </div>
        </section>

              {/* Adoption & Impact Charts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-16">
          {/* Farmers Using Platform */}
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/30">
            <h3 className="text-xl font-bold text-green-700 mb-4">Farmers Using AgriSupport</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={adoptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="farmers" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Yield Comparison */}
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/30">
            <h3 className="text-xl font-bold text-green-700 mb-4">Yield Improvement with AI</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="yield" fill="#facc15" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>


       <section>
        <CropYieldAnalytics/>
       </section>

       <section>
        <GovernmentSchemesSection/>
       </section>

      
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-green-800 text-white p-12 py-16 relative overflow-hidden w-full">
        <div className="w-full text-center relative z-10">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <span>🌾</span> AgriSupport Pro
          </h3>
          <p className="text-lg mb-4">
            Empowering farmers with cutting-edge technology and sustainable solutions
          </p>
          <p className="opacity-80">&copy; 2025 AgriSupport Pro. Building the future of farming.</p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-600 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-all flex items-center justify-center text-2xl font-bold"
      >
        ↑
      </button>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .float-anim {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AgriSupportHome;
