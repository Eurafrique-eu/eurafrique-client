import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "./Socials.scss";

const Socials = () => {
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

  return (
    <div className="social-corner">
      <div className="social-title">Nous suivre</div>
      <div className="socials-container">
        <Link
          to="/"
          data-url="facebook.com"
          data-social-media-name="Facebook"
          onClick={handleLinkClick}
        >
          <ReactSVG src="/src/assets/facebook-square.svg" className="social-logo" />
        </Link>
        <Link
          to="/"
          data-url="twitter.com"
          data-social-media-name="Twitter"
          onClick={handleLinkClick}
        >
          <ReactSVG src="/img/Twitter.svg" className="social-logo" />
        </Link>
        <Link
          to="/"
          data-url="instagram.com"
          data-social-media-name="Instagram"
          onClick={handleLinkClick}
        >
          <ReactSVG src="/img/Instagram.svg" className="social-logo" />
        </Link>
      </div>
      <div className="links-container">
        <Link className="links">• Plan du site</Link>
        <Link className="links">• Documents administratifs et statutaires</Link>
        <Link className="links">• Mentions légales et CGU</Link>
        <Link className="links">• Gestion des cookies</Link>
        <p>
          Copyright © 2023 <a href="https://www.linkedin.com/in/thomas-augot/">Thomas Augot</a>
        </p>
      </div>
    </div>
  );
};

export default Socials;
