import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./BENEVOLEA.scss";

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
          <h1>DONNER DE SON TEMPS N’EST PAS PERDRE SON TEMPS</h1>
          <p>
            Participer au projet EURAFRIQUE c’est : Choisir d’apporter sa contribution à une commu-
            nauté et de s’impliquer dans un trajet collectif. Pouvoir grâce à des formats souples
            d’engagement adaptables à vos disponibilités en télé-bénévolat.Un bénévolat appuyé par
            la digitalisation pour des programmes de formation, insertion professionnelle pour les
            populations et de soutien aux porteurs de projets de développement local.
          </p>
          <br />
          <br />
          <h1>REJOINDRE LA GRANDE CHAINE DE LA SOLIDARITE</h1>
          <p>
            Contribuer au developpement economique et social en Afrique en favorisant les activites
            generatrices de revenus, acompagnier le developpement, l’education et la formation dans
            les multiples defis du XXI siecle. Metre en relief la necessite d’actions citoyennes et
            solidaires avec la mis en place une grande chaine de benevolat pour accompagner
            concretement des projets de developemetn entreprenarial et de competences sur le
            continent africain.{" "}
          </p>
          <br />
          <br />
          <img
            src={require("../../../src/assets/benevolea-illu.PNG")}
            alt="benevolea-description"
          />
          <h1>PARLER DE NOUS - SOUTENIR LES PROJETS DE LA COMMUNAUTE EURAFRIQUE</h1>
        </div>
        <div className="column-two">
          <h1>RENCONTRONS NOUS</h1>
          <p>
            Notre force c’est votre experience et votre disponibilite Soutenir et developper les
            capacites de chacun de nos benevole en s’appuyant sur des approches innovantes. Nous
            aider a collecter dans financements et partenariats{" "}
          </p>
          <br />
          <br />
          <h1>AUCUN ESPACE CIVIQUE SANS ESPACE NUMERIQUE</h1>
          <p>
            Réunir un maximum de talents utiles (Gestion administrative, accompagnement technique,
            finance, marketing, communication) <br /> <br /> Echanger sur vos profils et les
            meilleurs moyens d’agir ensemble selon vos experiences et nos idees pour “cooperer pour
            construire l’avenir” <br />
            <br />
            Valorisez vos centres d’interets : <br />
            Agriculture <br />
            Agroalimentaire <br />
            Machinisme agricole <br />
            Biodiversite - Nature <br />
            Education - Formation <br /> Eau - Gestion des dechets - Pollution <br />
            Energies{" "}
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
