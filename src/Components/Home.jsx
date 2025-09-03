import React, { useState, useEffect, useMemo } from "react";
import GeminiChat from "../Ai-assitants/geminiChat";

const AgriSupportHome = () => {
  const [headerOpacity, setHeaderOpacity] = useState(0.9);
  const [toggleStates, setToggleStates] = useState({
    weather: true,
    pest: true,
    market: false,
  });
 //for gemini assistant
  const [showChat, setShowChat] = useState(false);

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
    }, 4000); // change every 4s
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

  const toggleSwitch = (key) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Floating particles
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

  // Toggle Switch Component
  const ToggleSwitch = ({ isActive, onToggle, label }) => (
    <div className="flex justify-between items-center py-4">
      <span className="text-gray-700 font-medium">{label}</span>
      <button
        onClick={onToggle}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
          isActive ? "bg-green-600" : "bg-gray-300"
        }`}
        aria-label={`Toggle ${label}`}
      >
        <div
          className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isActive ? "translate-x-7" : "translate-x-0.5"
          }`}
        />
      </button>
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
        <div className="w-full px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-white">
              <span className="text-3xl animate-pulse">🌾</span>
              <h1 className="text-2xl font-bold">AgriSupport Pro</h1>
            </div>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center md:justify-end gap-6 w-full">
                {["Home", "Dashboard", "Resources", "Weather AI", "24/7 Support"].map((item) => (
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
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-8">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Images */}
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
            {/* Green overlay */}
            <div className="absolute inset-0 bg-green-900/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6 pt-32">
            <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
              Next-Gen Farming Intelligence
            </h1>
            <p className="mt-6 text-lg md:text-2xl max-w-3xl">
              AI-powered solutions for smarter agriculture — empowering farmers with
              insights, alerts, and recommendations.
            </p>
            <div className="mt-8 flex gap-6">
              <button
                className="px-6 py-3 bg-green-600 rounded-xl shadow-lg hover:bg-green-700 transition"
                aria-label="Explore Dashboard"
              >
                Explore Dashboard
              </button>
             <button
                onClick={() => setShowChat(true)}
                className="px-6 py-3 bg-amber-500 rounded-xl shadow-lg hover:bg-amber-600 transition"
                 >
                    Try AI Assistant
                </button>

                {showChat && <GeminiChat onClose={() => setShowChat(false)} />}
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="grid md:grid-cols-2 gap-6 py-16 w-full">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg animate-slide-in-left">
            <div className="font-bold text-lg mb-2">🌧️ Weather Alert</div>
            <p>Heavy rainfall predicted for next 48 hours. AI recommends immediate drainage preparation.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-6 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg animate-slide-in-right">
            <div className="font-bold text-lg mb-2">💡 Smart Tip</div>
            <p>New pesticide-free pest control method showing 94% effectiveness in trials.</p>
          </div>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 w-full">
          {[
            { icon: "🌡️", title: "Soil Temperature", value: "24°C", change: "+2.3° from yesterday", progress: 75 },
            { icon: "💧", title: "Irrigation Status", value: "Active", change: "Zone 3 scheduled next", progress: 60 },
            { icon: "🌱", title: "Crop Health", value: "Excellent", change: "AI confidence: 96%", progress: 96 },
            { icon: "⚠️", title: "Pest Risk", value: "Low", change: "Preventive spray suggested", progress: 25 },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group relative"
            >
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {card.icon}
              </div>
              <div className="text-green-700 font-bold text-lg mb-2">{card.title}</div>
              <div className="text-3xl font-black text-gray-800 mb-2">{card.value}</div>
              <div className="text-green-600 text-sm font-medium mb-4">{card.change}</div>
              <ProgressBar percentage={card.progress} delay={index * 200} />
            </div>
          ))}
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-2 gap-8 py-16 w-full">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-green-700 to-amber-800 text-white p-8 relative overflow-hidden">
              <div className="flex items-center gap-4 text-2xl font-bold relative z-10">
                <span className="text-3xl">🔬</span>
                Smart Pest Detection
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                AI-powered image recognition identifies pests and diseases instantly. Upload photos for real-time
                analysis and targeted treatment recommendations.
              </p>
              <ProgressBar percentage={88} delay={500} />
              <div className="text-sm text-gray-600 mt-2">88% accuracy rate</div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-green-700 to-amber-800 text-white p-8 relative overflow-hidden">
              <div className="flex items-center gap-4 text-2xl font-bold relative z-10">
                <span className="text-3xl">🛰️</span>
                Climate Forecasting
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced weather modeling with 15-day precision forecasts. Get drought and flood predictions with
                actionable preparation timelines.
              </p>
              <ProgressBar percentage={92} delay={700} />
              <div className="text-sm text-gray-600 mt-2">92% prediction accuracy</div>
            </div>
          </div>
        </section>

        {/* Toggle Section */}
        <section className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30 py-16 w-full">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Notification Preferences</h3>
          <div className="space-y-4">
            <ToggleSwitch
              label="Weather Alerts"
              isActive={toggleStates.weather}
              onToggle={() => toggleSwitch("weather")}
            />
            <ToggleSwitch
              label="Pest Warnings"
              isActive={toggleStates.pest}
              onToggle={() => toggleSwitch("pest")}
            />
            <ToggleSwitch
              label="Market Updates"
              isActive={toggleStates.market}
              onToggle={() => toggleSwitch("market")}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-green-800 text-white p-12 py-16 relative overflow-hidden w-full">
        <div
          className="absolute inset-0 opacity-10 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='1' fill='white'/></svg>")`,
          }}
        />
        <div className="w-full text-center relative z-10">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <span>🌾</span>
            AgriSupport Pro
          </h3>
          <p className="text-lg mb-4">
            Empowering farmers with cutting-edge technology and sustainable solutions
          </p>
          <p className="opacity-80">&copy; 2025 AgriSupport Pro. Building the future of farming.</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-green-600 to-blue-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 flex items-center justify-center text-2xl font-bold"
      >
        ↑
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .float-anim {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default AgriSupportHome;
