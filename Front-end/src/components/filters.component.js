import React from "react";

import withFilters from "./withFilters";

const FiltersComponent = (props) => {
  return (
    <div className="filters">
      <span>Фильтр</span>
    </div>
  );
};

export default withFilters(FiltersComponent);
