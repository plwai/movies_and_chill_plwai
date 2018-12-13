// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import QueryString from 'query-string';

import MovieDetailListCard from '../movie-detailed-card';

import { MOVIE_PROFILE_PAGE_ROUTE } from '../../routes';
import { StyledPageSubTitle } from '../styles/page-title';
import {
  MovieDetailedListContainer,
  MovieDetailedListElementContainer,
} from '../styles/movie-detailed-list-style';

type MovieStates = {
  loading: Boolean,
  movie: Array<any>,
  page: number,
  error: string,
};

type Props = {
  fetchMovie: Function,
  movie: MovieStates,
  history: any,
  location: { search: any },
};

class MovieDetailListPage extends Component<Props> {
  constructor(props) {
    super();

    const {
      location: { search },
    } = props;

    const { searchQuery } = QueryString.parse(search);

    this.query = searchQuery;
  }

  query: string;

  componentDidMount() {
    const { fetchMovie } = this.props;

    document.addEventListener('scroll', this.trackScrolling);

    const query = this.query;

    fetchMovie({ query });
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

      const query = this.query;

      fetchMovie({ query, page });
    }
  };

  handleCardClick(id: number) {
    const { history } = this.props;

    history.push(`${MOVIE_PROFILE_PAGE_ROUTE}?movieId=${id}`);
  }

  renderMovies(movies: any) {
    const { movie } = movies;

    if (movie === undefined) {
      return;
    }

    const renderResult = movies.movie.map(
      ({ id, poster_path, release_date, title, vote_average, overview }) => (
        <MovieDetailListCard
          key={id}
          handleClick={() => this.handleCardClick(id)}
          img={poster_path}
          title={title}
          voteAvg={vote_average}
          overview={overview}
        />
      )
    );

    return renderResult;
  }

  render() {
    const { movie } = this.props;

    return (
      <MovieDetailedListContainer>
        <StyledPageSubTitle>Search Result</StyledPageSubTitle>
        <MovieDetailedListElementContainer>
          {movie.error !== '' && movie.error}
          {this.renderMovies(movie)}
        </MovieDetailedListElementContainer>
        <div id="scroll-check" />
        {movie.loading && <CircularProgress />}
      </MovieDetailedListContainer>
    );
  }
}
export default withRouter(MovieDetailListPage);
