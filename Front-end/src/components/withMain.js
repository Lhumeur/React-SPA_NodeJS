import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {fetchGetData} from "../actions/fetch.action";

const withMain = Component => {
  const WrappedComponent = props => {
    return <Component {...props} />
  };

  const mapStateToProps = state => {
    return {
      isError: state.songs.isError,
      loading: state.songs.loading
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        fetchData: fetchGetData
      },
      dispatch
    )
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withMain;
