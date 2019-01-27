import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import "./App.css";

import {fetchGetData} from "../actions/fetch.action";
import MainComponent from "../components/main.component";

const App = (props) => {
  props.fetchData();

  return (
    <MainComponent/>
  );
};

export default connect(
  null,
  dispatch => bindActionCreators({
      fetchData: fetchGetData,
    },
    dispatch
  )
)(App);
