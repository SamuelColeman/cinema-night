import React from 'react';
import './MoviePage.css';
import { Link } from 'react-router-dom';

const MoviePage = ({ title, id, backdrop_path, poster_path, overview, release_date, vote_average }) => {
	return (
		<section className='movie_page' id={id}>
			<h1 className='movie__page--title'>{title}</h1>
			<img className="movie__page--img" src={poster_path} alt={title} />
			<h2>Release: {release_date}</h2>
			<h2>Rating: {vote_average}</h2>
			<img className="movie__page--img" src={backdrop_path} alt={title} />
			<h3>{overview}</h3>
			<Link to='/'>
				<button>Back</button>
			</Link>
		</section>
	)
}

export default MoviePage;