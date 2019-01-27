import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {handleSortClick} from "../actions/fetch.action";

const withPlaylist = Component => {
  const WrappedComponent = props => {
    return <Component {...props}/>
  };

  const mapStateToProps = state => {
    return {
      songs: state.songs.dataList.SONGS,
      pages: state.songs.dataList.PAGES,
      sorting: state.songs.SORTING
    }
  };

  const mapDispatchToProps = dispath => {
    return bindActionCreators({sortAction: handleSortClick}, dispath);
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withPlaylist;
