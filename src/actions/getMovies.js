import axios from 'axios'
import { API } from './config'
import * as types from './types'
export const getMovies = () => {
  return dispatch => {
    dispatch({
      type: types.MOVIE_FETCH_REQUEST,
    })

    axios.get(`${API}?apikey=8e2101cd&s=Rock&plot=false&page=3`)
      .then(function (response) {
        dispatch({
          type: types.MOVIE_FETCH_SUCCESS,
          response
        })
      })
      .catch(function (error) {
        dispatch({
          type: types.MOVIE_FETCH_FAILED,
          error
        })
      });
  };
}