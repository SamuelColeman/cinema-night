import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { isLoading } from './isLoading';
import { currentUser } from './currentUser';
import { users } from './signUp';
import { favourite } from './isFavourite';
import { favouritesList  } from './favouritesList';

export const rootReducer = combineReducers({
    movies,
    isLoading,
    hasError,
    currentUser, 
    users,
    favourite,
    favouritesList 
})