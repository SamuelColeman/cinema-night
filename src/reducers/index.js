import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { isLoading } from './isLoading';
// import { email } from './email';
// import { password } from './password';
import {currentUser} from './currentUser'

export const rootReducer = combineReducers({
    movies,
    isLoading,
    hasError,
    currentUser
})