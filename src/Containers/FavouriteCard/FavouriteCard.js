import React from 'react';
import './FavouriteCard.css';
import { connect } from 'react-redux';
import fave from '../../images/transparent-heard.png'

export const FavouriteCard = ({ handleFavourite, movie, hasError }) => {
        return (
            <section className='favourites_card' id={movie.poster_path}>
                <h1 className='favourites__card--title'>{ movie.title }</h1>
                <img className="favourites__card--img" src={movie.poster_path} alt={movie.title} />
                <button onClick={() => handleFavourite( movie )}>Favorite</button>
                <h1>{ hasError }</h1>
            </section>
        )
}  

export const mapStateToProps = (state) => ({
    hasError: state.hasError,
})

export default connect(mapStateToProps)(FavouriteCard);