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

export const setSorting = sorting => {
  return {
    type: "@@songs/SORTING",
    sorting
  }
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

export const fetchPostData = () => {
  const index = 2;
  const limit = 20;
  const data = {
    SINGERS: [],
    GENRES: [],
    YEARS: [],
    SORTING: {
      singer: -1
    }
  };

  const url = backendApiUrl + '?index=' + index + '&limit=' + limit;

  return dispatch => {
    dispatch(fetchRequest());

    fetch(url, {
      method: 'POST',
      headers: [
        ["Content-Type", "application/json"],
        ["Content-Type", "text/plain"]
      ],
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        console.log(response.json());

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
