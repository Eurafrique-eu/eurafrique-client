import { useTranslation } from "react-i18next";
import "./Not Found.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="not-found-page">
      <h1>404 Not Found</h1>
      <p>{t("Cette page n'existe pas")}</p>
      <div>
        <a href="/">{t("Retour à la page d'accueil")}</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
