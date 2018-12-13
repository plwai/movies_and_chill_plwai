// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import QueryString from 'query-string';

import { PEOPLE_PROFILE_PAGE_ROUTE } from '../../routes';
import { StyledPageSubTitle } from '../styles/page-title';
import Profile from '../profile';
import { MovieProfileContainer } from '../styles/movie-profile-style';

type MovieDetail = {
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: string,
  overview: string,
  runtime: string,
};

type Props = {
  movieProfile: {
    movieDetail: MovieDetail,
    cast: any,
    videos: any,
    loading: boolean,
  },
  fetchMovieDetail: Function,
  location: { search: any },
  history: any,
};

class MovieProfilePage extends Component<Props> {
  constructor(props) {
    super();

    const {
      location: { search },
    } = props;

    const { movieId } = QueryString.parse(search);

    this.movieId = movieId;
  }

  movieId: string;

  componentDidMount() {
    const { fetchMovieDetail } = this.props;

    fetchMovieDetail(this.movieId);
  }

  handleCardClick(id) {
    const { history } = this.props;

    history.push(`${PEOPLE_PROFILE_PAGE_ROUTE}?personId=${id}`);
  }

  renderProfile() {
    const {
      movieProfile: {
        movieDetail: {
          title,
          poster_path,
          release_date,
          vote_average,
          overview,
          runtime,
        },
        cast,
        videos,
        loading,
      },
    } = this.props;

    const modifiedCast = cast.map(element => {
      element.img_path = element.profile_path;

      return element;
    });

    return (
      <Profile
        title={title}
        poster_path={poster_path}
        date={release_date}
        rating={vote_average}
        overview={overview}
        overview_title="Overview"
        runtime={runtime}
        credit={modifiedCast}
        creditTitle="Cast"
        videos={videos}
        loading={loading}
        handleCardClick={id => this.handleCardClick(id)}
      />
    );
  }

  render() {
    return (
      <MovieProfileContainer>
        <StyledPageSubTitle> Movie Profile </StyledPageSubTitle>
        {this.renderProfile()}
      </MovieProfileContainer>
    );
  }
}

export default withRouter(MovieProfilePage);
