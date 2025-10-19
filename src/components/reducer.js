import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  title: "",
  body: "",
};

function loremReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        title: action.payload.title,
        body: action.payload.body,
      };
    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default loremReducer;
