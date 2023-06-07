import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import esTranslation from "./locales/es.json";
import arTranslation from "./locales/ar.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("translate", "no");

    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: enTranslation },
          fr: { translation: frTranslation },
          es: { translation: esTranslation },
          ar: { translation: arTranslation },
        },
        fallbackLng: "fr", // Default language if the user's language is not available
        detection: {
          order: ["localStorage", "navigator"], // Order in which detection methods are used
          caches: ["localStorage"], // Store the language preference in localStorage
        },
      })
      .then(() => {
        setIsI18nInitialized(true);
      });
  }, []);

  if (!isI18nInitialized) {
    // Render a loading state while i18n initialization is in progress
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route exact path="/FOCUS" />
          <Route exact path="/AJVI-COJEA" />
          <Route exact path="/POLMAR" />
          <Route exact path="/EAGROPOLE" />
          <Route exact path="/IDEA" />
          <Route exact path="/BENEVOLEA" />
          <Route exact path="/DIGEA" />
          <Route exact path="/GM-TV" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
