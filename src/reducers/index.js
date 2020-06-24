import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import movie from './movie';

export default (history) => combineReducers({
	'router': connectRouter(history),
	movie,	
});
