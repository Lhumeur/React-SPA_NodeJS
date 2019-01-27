import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {handleSortClick} from "../actions/fetch.action";

const withSongsList = Component => {
  const WrappedComponent = props => {
    return <Component {...props}/>
  };

  const mapDispatchToProps = dispath => {
    return bindActionCreators({item: handleSortClick}, dispath);
  };

  return connect(
    null,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withSongsList;
