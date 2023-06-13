import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import { useTranslation } from "react-i18next";
import "./FocusPage.scss";

function Focus() {
  const { setTabs } = useTabsContext();
  const { t } = useTranslation();

  useEffect(() => {
    const tabsData = [
      t("ACTUALITES"),
      t("EURAFRIQUE"),
      t("HISTORIQUE"),
      t("PARTENAIRES"),
      t("LA FRANCOPHONIE"),
    ];
    setTabs(tabsData);
  }, [setTabs, t]);

  return (
    <div className="focus-page">
      <div className="page-content">
        <div className="column-one">
          <h1>L'EDITO</h1>
          <p>
            Discours parfois formatés, forums, colloques et conférences sur l’émergence de l’Afrique
            ne doivent pas occulter sa partie immergée et son avenir. <br />
            <br />
            Ces discours de séduction doivent tenir compte de la réalité de femmes,d’hommes et d’une
            jeunesse fiers de leurs origines.
          </p>
          <img src={require("../../../src/assets/iceberg-africa.PNG")} alt="Africa under water" />
          <p>
            Une Économie Sociale et Solidaire doit être au centre de cette croissance attendue par
            les populations. <br />
            <br />
            Coopérer pour construire l’avenir et mettre en place des passerelles entreprenariales
            entre l’Europe et l’Afrique doit être une opportunité pour ces deux continents. <br />
            <br /> EURAFRIQUE doit devenir la plateforme de cette chaîne de la solidarité et en
            federer tous les maillons de ces énergies .
          </p>
        </div>
        <div className="column-two">
          <h1>PARTICIPER AU PROJET EURAFRIQUE C’EST :</h1>
          <br />
          <h2>AJVI-COJEA</h2>
          <p>
            * Rejoindre la grande chaîne de la solidarité internationale permettant d'aider, de
            suivre et de coordonner les initiatives sociales et entrepreneuriales dans des domaines
            présentant un enjeu vital pour un développement pérenne du continent africain. <br />
            <br />
            * Piloter des stratégies thématiques ambitieuses. <br />
            <br />* Promouvoir un système éducatif et de formation à l’auto-entrepreneuriat et à
            l’artisanat, valorisant les ressources naturelles et les énergies renouvelables.
          </p>
          <br />
          <br />
          <h2>POLMAR</h2>
          <p>
            * Lutter contre la pollution terrestre et marine. Éviter les graves conséquences sur les
            ressources hydriques. <br />
            <br />* Protéger les écosystèmes des rejets de tout type de déchets et surtout de rejets
            plastiques
          </p>
          <br />
          <br />
          <h2>AGROPOLEA</h2>{" "}
          <p>
            Renforcer les activités et les capacités des entrepreneurs agricoles, notamment chez les
            jeunes et chez les femmes, au sein d’organisations autonomes et professionnalisées.
            Passer d’une agriculture de subsistance à une activité de productivité.
          </p>
          <br />
          <br />
          <br />
          <h2>IDEA</h2>
          <p>
            Fédérer des initiatives, des idées et des réflexions participatives pour des entreprises
            sociales et solidaires.
          </p>
          <br />
          <br />
          <br />
          <h2>BENEVOLEA</h2>
          <p>
            Donner du temps n’est pas perdre son temps. Disponibilités pour rejoindre notre
            communauté dans un bénévolat appuyé par la digitalisation.
          </p>
          <br />
          <br />
          <br />
          <h2>DIGEA</h2>
          <p>Aucun espace civique sans espace numérique.</p>
          <br />
          <br />
          <br />
          <br />
          <h2>GM TV</h2>
          <p>
            .................................................
            <br />
            .....................................
          </p>
        </div>
      </div>
    </div>
  );
}

export default Focus;
