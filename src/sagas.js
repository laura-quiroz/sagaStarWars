import { takeEvery, call, put, all } from "redux-saga/effects" ;
import axios from "axios";

function fetchStarWars(place){
  return axios({
    method: "get",
    url: `https://swapi.co/api/${place}`
  });
}

function* workerSaga(action){
  try{
    const response = yield call(fetchStarWars, action.payload);
    const starWars = response.data;
    yield put({ type: "API_CALL_SUCCESS", payload: starWars });
  } catch (error){
    yield put({ type: "API_CALL_FAILURE", error});
  }
}

function* watcherSaga(){
  yield takeEvery("API_CALL_REQUEST", workerSaga);
}

export function* rootSaga(){
  yield all([
    watcherSaga()
  ])
}
