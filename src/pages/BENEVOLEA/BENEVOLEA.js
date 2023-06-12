import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./BENEVOLEA.scss";
import { Link } from "react-router-dom";

const BENEVOLEA = () => {
  const { setTabs } = useTabsContext();
  const { t } = useTranslation();

  useEffect(() => {
    const tabsData = [];
    setTabs(tabsData);
  }, [setTabs, t]);

  return (
    <div className="benevolea-page">
      <div className="page-content">
        <div className="column-one">
          <h1>{t("DONNER DE SON TEMPS N’EST PAS PERDRE SON TEMPS")}</h1>
          <p>
            {t(
              "Participer au projet EURAFRIQUE c’est : Choisir d’apporter sa contribution à une communauté et de s’impliquer dans un trajet collectif. Pouvoir grâce à des formats souples d’engagement adaptables à vos disponibilités en télé-bénévolat.Un bénévolat appuyé par la digitalisation pour des programmes de formation, insertion professionnelle pour les populations et de soutien aux porteurs de projets de développement local."
            )}
          </p>
          <h1>{t("REJOINDRE LA GRANDE CHAINE DE LA SOLIDARITE")}</h1>
          <p>
            {t(
              "Contribuer au développement économique et social en Afrique en favorisant les activités génératrices de revenus, accompagner le développement, l'éducation et la formation dans les multiples défis du XXIe siècle. Mettre en relief la nécessité d'actions citoyennes et solidaires avec la mise en place d'une grande chaîne de bénévolat pour accompagner concrètement des projets de développement entrepreneurial et de compétences sur le continent africain."
            )}
          </p>
          <h1>{t("PARLER DE NOUS - SOUTENIR LES PROJETS DE LA COMMUNAUTE EURAFRIQUE")}</h1>
          <h3>
            <Link to="/" className="links">
              {t("NOUS REJOINDRE")}
            </Link>
          </h3>
          <p>
            {t(
              "Notre force c’est votre experience et votre disponibilite Soutenir et developper les capacites de chacun de nos benevole en s’appuyant sur des approches innovantes. Nous aider a collecter dans financements et partenariats"
            )}
          </p>
        </div>
        <div className="column-two">
          <h3>
            <Link to="/" className="links">
              {t("DEVENIR UN MAILLON EURAFRIQUE")}
            </Link>
          </h3>
          <img
            src={require("../../../src/assets/benevolea-illu.PNG")}
            alt="benevolea-description"
            style={{ width: "150px", marginLeft: "-120px" }}
          />
          <p>
            {t("- MEMBRE")}
            <br />
            {t("- MEMBRE ACTIF")} <br />
            {t("- MEMBRE BIENFAITEUR")} <br />
            {t("- MEMBRE REFERENT")} <br />
            {t("- MEMBRE AMBASSADEUR")} <br />
            {t("- MEMBRE VOLONTAIRE")} <br />
            {t("- MEMBRE PARTENAIRE")} <br />
            {t("- MEMBRE INSTITUTIONNEL")} <br />
          </p>
          <br />
          <h3>
            <Link to="/" className="links">
              {t("RECEVOIR NOTRE LETTRE D’INFORMATION")}
            </Link>
          </h3>
          <h1>{t("AUCUN ESPACE CIVIQUE SANS ESPACE NUMERIQUE")}</h1>
          <p>
            {t(
              "Réunir un maximum de talents utiles (Gestion administrative, accompagnement technique, finance, marketing, communication)"
            )}
            <br /> <br />
            {t(
              "Echanger sur vos profils et les meilleurs moyens d’agir ensemble selon vos experiences et nos idees pour “cooperer pour construire l’avenir”"
            )}{" "}
            <br />
            <br />
            {t("Valorisez vos centres d’interets :")} <br />
            {t("Agriculture")} <br />
            {t("Agroalimentaire")} <br />
            {t("Machinisme agricole")} <br />
            {t("Biodiversite - Nature")} <br />
            {t("Education - Formation")} <br />
            {t("Eau - Gestion des déchets - Pollution")} <br />
            {t("Énergies")}
          </p>
          <img
            src={require("../../../src/assets/benevolea-illu(2).PNG")}
            alt="benevolea-description"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BENEVOLEA;
