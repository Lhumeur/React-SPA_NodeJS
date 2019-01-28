import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {handleIndexClick, handleSortClick} from "../actions/fetch.action";

const withPlaylist = Component => {
  const WrappedComponent = props => {
    return <Component {...props}/>
  };

  const mapStateToProps = state => {
    return {
      ...state.songs
    }
  };

  const mapDispatchToProps = dispath => {
    return bindActionCreators({
      sortAction: handleSortClick,
      setIndex: handleIndexClick
    }, dispath);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withPlaylist;
