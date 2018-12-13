// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListCard from '../list-card';

import { MOVIE_PROFILE_PAGE_ROUTE } from '../../routes';
import { StyledPageSubTitle } from '../styles/page-title';
import { ListContainer, ListElementContainer } from '../styles/list-style';

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
};

class MovieListPage extends Component<Props> {
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

  // Redirect to movie profile
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
        <ListCard
          key={id}
          handleClick={() => this.handleCardClick(id)}
          img={poster_path}
          title={title}
        />
      )
    );

    return renderResult;
  }

  render() {
    const { movie } = this.props;

    return (
      <ListContainer>
        <StyledPageSubTitle>Popular</StyledPageSubTitle>
        <ListElementContainer>
          {movie.error !== '' && movie.error}
          {this.renderMovies(movie)}
        </ListElementContainer>
        <div id="scroll-check" />
        {movie.loading && <CircularProgress />}
      </ListContainer>
    );
  }
}
export default withRouter(MovieListPage);
