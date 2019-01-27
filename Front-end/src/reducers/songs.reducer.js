const initialState = {
  loading: false,
  isError: false,
  dataList: {},
  index: 1,
  limit: 10,
  SINGERS: [],
  GENRES: [],
  YEARS: [],
  SORTING: {
    singer: 1
  }
};

const SongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@songs/SEND_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }
    case "@@songs/RESPONCE_SERVER": {
      return {
        ...state,
        loading: false,
        dataList: action.dataList
      }
    }
    case "@@songs/ERROR_SERVER": {
      return {
        ...state,
        loading: false,
        isError: true
      }
    }
    case "@@songs/SORTING": {
      return {
        ...state,
        SORTING: action.sorting
      }
    }
    default: {
      return state;
    }
  }
};

export default SongsReducer;
