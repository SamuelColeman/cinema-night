import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { isLoading } from './isLoading';
import { email } from './email';
import { password } from './password';

export const rootReducer = combineReducers({
    movies,
    isLoading,
    hasError,
    email,
    password
})