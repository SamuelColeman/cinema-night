import React from 'react';
import './MoviePage.css';
import { Link } from 'react-router-dom';

const MoviePage = ({ title, id, poster_path, overview, release_date, vote_average }) => {
	return (
		<section className='movie_page' id={id}>
			<h1>{title}</h1>
			<img className="movie__card--img" src={poster_path} alt={title} />
			<h2>Release Date: {release_date}</h2>
			<h2>Avg Review: {vote_average}</h2>
			<h3>{overview}</h3>
			<Link to='/'>
				<button>Back</button>
			</Link>
		</section>
	)
}

export default MoviePage;