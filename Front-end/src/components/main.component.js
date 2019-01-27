import React, {Fragment} from "react";

import withMain from "./withMain";
import PreloaderComponent from "./preloader.component";
import ErrorComponent from "./error.component";
import ContainerComponent from "./container.component";

const MainComponent = props => {
  return (
    <Fragment>
      {props.loading ? <PreloaderComponent/> : props.isError ? <ErrorComponent/> : <ContainerComponent />}
    </Fragment>
  );
};

export default withMain(MainComponent);
