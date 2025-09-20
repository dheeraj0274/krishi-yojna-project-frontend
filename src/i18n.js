import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to AgriSupport Pro",
        dashboard: "Dashboard",
        resources: "Resources",
        support: "Support",
      },
    },
    hi: {
      translation: {
        welcome: "एग्रीसपोर्ट प्रो में आपका स्वागत है",
        dashboard: "डैशबोर्ड",
        resources: "संसाधन",
        support: "सहायता",
      },
    },
    pa: {
      translation: {
        welcome: "ਐਗ੍ਰੀਸਪੋਰਟ ਪ੍ਰੋ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        resources: "ਸਰੋਤ",
        support: "ਸਹਾਇਤਾ",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
