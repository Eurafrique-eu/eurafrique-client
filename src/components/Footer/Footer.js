import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import blueShape from "../../../src/assets/blue-svg (2).png";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const url = event.currentTarget.dataset.url;
    const socialMediaName = event.currentTarget.dataset.socialMediaName;
    const openAppPrompt = window.confirm(`Do you want to open ${socialMediaName}?`);
    if (openAppPrompt) {
      window.location.href = `app://${url}`;
    } else {
      window.open(url, "_blank");
    }
  };

  const { t } = useTranslation();

  return (
    <footer className="footer">
      <img className="blue-shape-left" src={blueShape} alt="Blue Shape" />
      <div className="footer-content">
        <div className="footer-socials">
          <h2>{t("NOUS SUIVRE")}</h2>
          <a href="/" onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{ color: "#2e59a3" }}
              className="social-icon"
            />
          </a>
          <a href="/" onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faTwitterSquare}
              style={{ color: "#80abf5" }}
              className="social-icon"
            />
          </a>
          <a href="/" onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#3d7be6" }}
              className="social-icon"
            />
          </a>
          <a href="/" onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              style={{ color: "#d2567b" }}
              className="social-icon"
            />
          </a>
        </div>
        <div className="footer-links">
          <a href="/">{t("Plan du site")}</a>
          <a href="/">{t("Documents administratifs et statutaires")}</a>
          <a href="/">{t("Mentions légales et CGU")}</a>
          <a href="/">{t("Gestion des cookies")}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2023 Eurafrique.eu. {t("Developpé par ")}&nbsp;
          <a href="https://www.linkedin.com/in/thomas-augot/" target="_blank" rel="noreferrer">
            Thomas Augot
          </a>
        </p>
      </div>
      <img className="blue-shape-right" src={blueShape} alt="Blue Shape" />
    </footer>
  );
};

export default Footer;
