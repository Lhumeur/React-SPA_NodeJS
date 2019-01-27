const initialState = {
  loading: false,
  isError: false,
  dataList: {}
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
    default: {
      return state;
    }
  }
};

export default SongsReducer;
