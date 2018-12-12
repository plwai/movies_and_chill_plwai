// @flow

import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import MovieListCard from '../movie-card';
import { StyledPageSubTitle } from '../styles/page-title';
import {
  MovieListContainer,
  MovieListElementContainer,
} from '../styles/movie-list-style';

type MovieStates = {
  loading: Boolean,
  movie: Array<any>,
  error: string,
};

type Props = {
  fetchTrending: Function,

  trendingMovie: MovieStates,
};

class Home extends Component<Props> {
  componentDidMount() {
    const { fetchTrending, trendingMovie } = this.props;

    if (trendingMovie.movie.length === 0) {
      fetchTrending();
    }
  }

  renderMovies(movies: any) {
    const { movie } = movies;

    if (movie === undefined) {
      return;
    }

    const renderResult = movies.movie.map(
      ({ id, poster_path, release_date, title, vote_average, overview }) => (
        <MovieListCard key={id} img={poster_path} title={title} />
      )
    );

    return renderResult;
  }

  render() {
    const { trendingMovie } = this.props;

    return (
      <MovieListContainer>
        <StyledPageSubTitle>Trending</StyledPageSubTitle>
        <MovieListElementContainer>
          {trendingMovie.error !== '' && trendingMovie.error}
          {this.renderMovies(trendingMovie)}
        </MovieListElementContainer>
        {trendingMovie.loading && <CircularProgress />}
      </MovieListContainer>
    );
  }
}
export default Home;
