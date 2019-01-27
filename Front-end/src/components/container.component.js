import React from "react";

import PlaylistComponent from "./playlist.component";
import FiltersComponent from "./filters.component";


const ContainerComponent = () => {
  return (
    <div className="container">
      <PlaylistComponent/>
      <FiltersComponent/>
    </div>
  );
};

export default ContainerComponent;
