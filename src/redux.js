const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
  loading: false,
  starWars: false,
  error: false
}

export function reducer(state = initialState, action){
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, loading: true, error: false };
    case API_CALL_SUCCESS:
      return { ...state, loading: false, starWars: action.payload, error: false };
    case API_CALL_FAILURE:
      return { ...state, loading: false, payload: null, error: true };
    default:
      return state;
  }
}
