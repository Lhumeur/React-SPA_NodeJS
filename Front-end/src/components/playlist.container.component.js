import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchPostData} from '../actions/fetch.action';

import SongsListComponent from "./songslist.component";
import PaginatorComponent from "./paginator.component";

class PlaylistContainerComponent extends Component {
  componentDidUpdate(prevProps){
    if (prevProps.SORTING !== this.props.SORTING){
      this.props.fetchPostData(this.props.SORTING);
    }
  }

  render() {
    return (
      <div>
        <SongsListComponent {...this.props}/>
        <PaginatorComponent {...this.props}/>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({
      fetchPostData: fetchPostData,
    },
    dispatch
  )
)(PlaylistContainerComponent)
