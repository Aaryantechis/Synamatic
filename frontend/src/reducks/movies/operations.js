import API from '../../API';
import { fetchMoviesAction } from './actions';
const api = new API();

export const fetchMovies = () => {
    return async dispatch => {
        return api
            .getMovies()
            .then(movies => {
                dispatch(fetchMoviesAction(movies));
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    };
};
