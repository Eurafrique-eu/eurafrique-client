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
            ne doivent pas occulter sa partie immergée et son avenir. Ces discours de séduction
            doivent tenir compte de la réalité de femmes,d’hommes et d’une jeunesse fiers de leurs
            origines
          </p>
          <img src={require("../../../src/assets/iceberg-africa.PNG")} alt="Africa under water" />
        </div>
        <div className="column-one">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
          odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </div>
      </div>
    </div>
  );
}

export default Focus;
