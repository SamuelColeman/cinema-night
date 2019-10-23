import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
    movies,
    isLoading,
    hasError
})