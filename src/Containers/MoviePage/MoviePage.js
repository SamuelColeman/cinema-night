import React from 'react';
import './MoviePage.css';
import { Link } from 'react-router-dom';
import back from '../../images/back.png'

 export const MoviePage = ({ title, id, backdrop_path, poster_path, overview, release_date, vote_average }) => {
	return (
		<section className='movie_page' id={id}>
			<Link to='/'>
			<img className="button-back" src={back}></img>
			</Link>
			<div className="movie__div--card">
			<h1 className='movie__page--title'>{title}</h1>
			<img className="movie__page--img" src={poster_path} alt={title} />
			<h2>Release: {release_date}</h2>
			<h2>Rating: {vote_average}</h2>
			<img className="movie__page--img" src={backdrop_path} alt={title} />
			<h3>{overview}</h3>
			</div>
		</section>

	)
}

export default MoviePage;