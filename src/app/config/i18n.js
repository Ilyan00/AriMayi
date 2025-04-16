import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      firstname: "Firstname",
      lastname: "Lastname",
      welcome: "Welcome",
      submit: "Submit",
    },
  },
  fr: {
    translation: {
      firstname: "Prénom",
      lastname: "Nom",
      welcome: "Bienvenue",
      submit: "Envoyer",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
