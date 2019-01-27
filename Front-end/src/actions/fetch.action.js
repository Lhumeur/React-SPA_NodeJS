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

export const setSorting = (sorting) => (
  {
    type: "@@songs/SORTING",
    sorting
  });

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
