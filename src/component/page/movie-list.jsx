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
  page: number,
  error: string,
};

type Props = {
  fetchMovie: Function,
  movie: MovieStates,
};

class PopularPage extends Component<Props> {
  componentDidMount() {
    const { fetchMovie, movie } = this.props;

    document.addEventListener('scroll', this.trackScrolling);

    if (movie.movie.length === 0) {
      fetchMovie();
    }
  }

  isBottom(el: any) {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 500;
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('scroll-check');
    if (this.isBottom(wrappedElement)) {
      let {
        fetchMovie,
        movie: { loading, page },
      } = this.props;

      if (loading) {
        return;
      }

      page += 1;

      fetchMovie({ page });
    }
  };

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
    const { movie } = this.props;

    return (
      <MovieListContainer>
        <StyledPageSubTitle>Popular</StyledPageSubTitle>
        {movie.loading && <CircularProgress />}
        <MovieListElementContainer>
          {movie.error !== '' && movie.error}
          {this.renderMovies(movie)}
        </MovieListElementContainer>
        <div id="scroll-check" />
      </MovieListContainer>
    );
  }
}
export default PopularPage;
