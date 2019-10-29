import React from 'react';
import './FavouriteCard.css';
import { connect } from 'react-redux';

export const FavouriteCard = ({ handleFavourite, movie, hasError }) => {
        return (
            <section className='favourites_card' id={movie.poster_path}>
                <div className="div__fave--card">
                <h1 className='favourites__card--title'>{ movie.title }</h1>
                <img className="favourites__card--img" src={movie.poster_path} alt={movie.title} />
                <button className="button__favorite--remove" onClick={() => handleFavourite( movie )}>Remove from Favorites</button>
                <h1>{ hasError }</h1>
                </div>
            </section>
        )
}  

export const mapStateToProps = (state) => ({
    hasError: state.hasError,
})

export default connect(mapStateToProps)(FavouriteCard);