export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLoremRequest = () => ({ type: FETCH_LOREM_REQUEST });
export const fetchLoremSuccess = (data) => ({
  type: FETCH_LOREM_SUCCESS,
  payload: data,
});
export const fetchLoremFailure = (error) => ({
  type: FETCH_LOREM_FAILURE,
  payload: error,
});

// Thunk action for fetching API data
export function fetchLorem() {
  return async (dispatch) => {
    dispatch(fetchLoremRequest());
    try {
      const response = await fetch("https://api.lorem.com/ipsum");
      const data = await response.json();
      dispatch(fetchLoremSuccess(data));
    } catch (error) {
      dispatch(fetchLoremFailure(error.message));
    }
  };
}
