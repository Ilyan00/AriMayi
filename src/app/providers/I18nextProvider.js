"use client";

import "../config/i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";

export default function CustomI18nextProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
