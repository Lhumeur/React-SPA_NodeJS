const initialState = {
  loading: [false, false],
  isError: [false, false],
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
    case "@@songs/GET_SEND_REQUEST": {
      return {
        ...state,
        loading: [true, false]
      };
    }
    case "@@songs/GET_RESPONCE_SERVER": {
      return {
        ...state,
        loading: [false, false],
        dataList: action.dataList
      }
    }
    case "@@songs/GET_ERROR_SERVER": {
      return {
        ...state,
        loading: [false, false],
        isError: [true, false]
      }
    }
    case "@@songs/POST_SEND_REQUEST": {
      return {
        ...state,
        loading: [false, true]
      };
    }
    case "@@songs/POST_RESPONCE_SERVER": {
      return {
        ...state,
        loading: [false, false],
        dataList: action.dataList
      }
    }
    case "@@songs/POST_ERROR_SERVER": {
      return {
        ...state,
        loading: [false, false],
        isError: [false, true]
      }
    }
    case "@@songs/SORTING": {
      return {
        ...state,
        SORTING: action.sorting
      }
    }
    case "@@songs/SET_INDEX": {
      return {
        ...state,
        index: action.index
      }
    }
    default: {
      return state;
    }
  }
};

export default SongsReducer;
