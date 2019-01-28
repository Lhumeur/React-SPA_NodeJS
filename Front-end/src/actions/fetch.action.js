import {backendApiUrl} from "../config/config"

export const fetchGetRequest = () => {
  return {
    type: "@@songs/GET_SEND_REQUEST"
  };
};

export const fetchGetReqSuccess = dataList => {
  return {
    type: "@@songs/GET_RESPONCE_SERVER",
    dataList
  };
};

export const fetchGetReqError = error => {
  console.log(error);

  return {
    type: "@@songs/GET_ERROR_SERVER"
  };
};

export const fetchPostRequest = () => {
  return {
    type: "@@songs/POST_SEND_REQUEST"
  };
};

export const fetchPostReqSuccess = dataList => {
  return {
    type: "@@songs/POST_RESPONCE_SERVER",
    dataList
  };
};

export const fetchPostReqError = error => {
  console.log(error);

  return {
    type: "@@songs/POST_ERROR_SERVER"
  };
};

export const setSorting = sorting => {
  return {
    type: "@@songs/SORTING",
    sorting
  }
};

export const setIndex = index => {
  return {
    type: "@@songs/SET_INDEX",
    index
  }
};

export const fetchGetData = () => {
  const url = backendApiUrl;
  console.log(url);
  return dispatch => {
    dispatch(fetchGetRequest());

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(dataList => {
        dispatch(fetchGetReqSuccess(dataList))
      })
      .catch(error => dispatch(fetchGetReqError(error)));
  };
};

export const fetchPostData = (index, limit, sorting) => {
  const data = {
    SINGERS: [],
    GENRES: [],
    YEARS: [],
    SORTING: sorting
  };

  const url = backendApiUrl + '?index=' + index + '&limit=' + limit;

  return dispatch => {
    dispatch(fetchPostRequest());

    fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
      json: true
    }).then(response => {

      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
      .then(dataList => {
        dispatch(fetchPostReqSuccess(dataList))
      })
      .catch(error => dispatch(fetchPostReqError(error)));
  };
};

export const handleSortClick = (event) => (dispatch) => {
  const nodes = event.currentTarget.childNodes;
  const sorting = {};

  switch (event.target.dataset.sort) {
    case "0":
    case "-1":
      event.target.dataset.sort = "1";
      break;
    case "1":
      event.target.dataset.sort = "-1";
      break;
    default:
      event.target.dataset.sort = "1";
  }

  nodes.forEach(item => {
    if (item.className !== event.target.className) {
      item.dataset.sort = "0";
    }
  });

  sorting[event.target.className] = +event.target.dataset.sort;

  return dispatch(setSorting(sorting));
};

export const handleIndexClick = (index) => (dispatch) => {
  return dispatch(setIndex(++index.selected));
};
