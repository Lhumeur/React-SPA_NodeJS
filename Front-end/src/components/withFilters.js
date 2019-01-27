import React from "react";
import {connect} from "react-redux";

const withFilters = Component => {
  const WrappedComponent = props => {
    return <Component {...props}/>
  };

  const mapStateToProps = state => {
    return {
      singers: state.songs.dataList.SINGERS,
      genres: state.songs.dataList.GENRES,
      years: state.songs.dataList.YEARS,
    }
  };

  return connect(
    mapStateToProps,
    null
  )(WrappedComponent);
};

export default withFilters;
