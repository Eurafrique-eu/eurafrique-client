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
import { TabsProvider } from "./components/Sidebar/SidebarTabs/TabsContext";
import Focus from "./pages/FocusPage/FocusPage";
import AJVICOJEA from "./pages/AJVI-COJEA/AJVI-COJEA";
import POLMAR from "./pages/POLMAR/POLMAR";
import AGROPOLEA from "./pages/AGROPOLEA/AGROPOLEA";
import IDEA from "./pages/IDEA/IDEA";
import BENEVOLEA from "./pages/BENEVOLEA/BENEVOLEA";
import DIGEA from "./pages/DIGEA/DIGEA";
import GMTV from "./pages/GMTV/GMTV";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import NotFoundPage from "./pages/NotFound/NotFound";

function SwipeRoutes({ children }) {
  const handleTouchMove = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <>{children}</>;
}

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
          order: ["localStorage", "navigator"],
          caches: ["localStorage"],
        },
      })
      .then(() => {
        setIsI18nInitialized(true);
      });
  }, []);

  if (!isI18nInitialized) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <TabsProvider>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Sidebar />
          <SwipeRoutes>
            <Routes>
              <Route path="/" element={<Focus />} />
              <Route path="/FOCUS" element={<Focus />} />
              <Route path="/AJVI-COJEA" element={<AJVICOJEA />} />
              <Route path="/POLMAR" element={<POLMAR />} />
              <Route path="/AGROPOLEA" element={<AGROPOLEA />} />
              <Route path="/IDEA" element={<IDEA />} />
              <Route path="/BENEVOLEA" element={<BENEVOLEA />} />
              <Route path="/DIGEA" element={<DIGEA />} />
              <Route path="/GM-TV" element={<GMTV />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </SwipeRoutes>
        </div>
        <Footer />
      </div>
    </TabsProvider>
  );
}

export default App;
