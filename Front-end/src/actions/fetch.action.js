import {backendApiUrl} from "../config/config"

export const fetchRequest = () => {
  return {
    type: "@@songs/SEND_REQUEST"
  };
};

export const fetchReqSuccess = dataList => {
  return {
    type: "@@songs/RESPONCE_SERVER",
    dataList
  };
};

export const fetchReqError = error => {
  console.log(error);

  return {
    type: "@@songs/ERROR_SERVER"
  };
};

export const fetchGetData = () => {
  const url = backendApiUrl;

  return dispatch => {
    dispatch(fetchRequest());

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(dataList => {
        dispatch(fetchReqSuccess(dataList))
      })
      .catch(error => dispatch(fetchReqError(error)));
  };
};
