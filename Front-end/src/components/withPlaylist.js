import React from "react";
import {connect} from "react-redux";

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

  return connect(
    mapStateToProps,
    null
  )(WrappedComponent);
};

export default withPlaylist;
