import React from 'react';
import FavouriteCard from '../FavouriteCard/FavouriteCard';
import './FavouritesContainer.css';
import { connect } from 'react-redux';

export const FavouritesContainer = ({ favouritesList, handleFavourite }) => {
	let mapFavorites;
	if (favouritesList.favorites === undefined) {
		mapFavorites = <h1>Error: Login</h1>
	} else { 
		mapFavorites = favouritesList.favorites.map(movie => {
		return <FavouriteCard key={movie.id} movie={movie} handleFavourite={handleFavourite} />
	})
}
	return (
		<section>
			{mapFavorites}
		</section>
	)
}

export const mapStateToProps = (state) => ({
  favouritesList: state.favouritesList
})

export default connect(mapStateToProps)(FavouritesContainer);