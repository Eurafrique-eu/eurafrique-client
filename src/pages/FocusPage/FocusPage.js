import React, { useEffect } from "react";
import { useTabsContext } from "../../components/Sidebar/SidebarTabs/TabsContext";
import "./FocusPage.scss";

function Focus() {
  const { setTabs } = useTabsContext();

  useEffect(() => {
    const tabsData = ["ACTUALITES", "EURAFRIQUE", "HISTORIQUE", "PARTENAIRES", "LA FRANCOPHONIE"];
    setTabs(tabsData);
  }, [setTabs]);

  return (
    <div className="focus-page">
      <h1>FOCUS Page</h1>
      <div className="page-content">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
          odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
          odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
}

export default Focus;
