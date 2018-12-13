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
  error: string,
};

type Props = {
  fetchTrending: Function,
  history: any,
  trendingMovie: MovieStates,
};

class Home extends Component<Props> {
  componentDidMount() {
    const { fetchTrending, trendingMovie } = this.props;

    if (trendingMovie.movie.length === 0) {
      fetchTrending();
    }
  }

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
    const { trendingMovie } = this.props;

    return (
      <ListContainer>
        <StyledPageSubTitle>Trending</StyledPageSubTitle>
        <ListElementContainer>
          {trendingMovie.error !== '' && trendingMovie.error}
          {this.renderMovies(trendingMovie)}
        </ListElementContainer>
        {trendingMovie.loading && <CircularProgress />}
      </ListContainer>
    );
  }
}
export default withRouter(Home);
