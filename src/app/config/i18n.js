import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      firstname: "Firstname",
      lastname: "Lastname",
      welcome: "Welcome",
      submit: "Submit",
      contact: "Contact",
      candidat: "Candidate number",
      listInterest: "List of candidates interested in the offer",
      about: "About",
    },
  },
  fr: {
    translation: {
      firstname: "Prénom",
      lastname: "Nom",
      welcome: "Bienvenue",
      submit: "Envoyer",
      contact: "Prendre contact avec ",
      candidat: "Candidat numéro",
      listInterest: "Liste des candidats intéréssé par l'offre",
      about: "À propos",
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
