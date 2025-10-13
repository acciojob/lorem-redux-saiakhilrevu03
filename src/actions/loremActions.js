export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';


export const fetchLorem = ()=> async (dispatch)=>{
    dispatch({type:FETCH_LOREM_REQUEST});
    try{
      const res = await fetch('https://api.lorem.com/ipsum');
      const data = await res.json();
      dispatch({ type:FETCH_LOREM_SUCCESS, payload:data});
    }catch(error){
      dispatch({type:FETCH_LOREM_FAILURE,payload:error.message});
    }
}
