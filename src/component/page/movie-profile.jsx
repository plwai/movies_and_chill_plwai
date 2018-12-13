// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import AccessTime from '@material-ui/icons/AccessTime';
import DateRange from '@material-ui/icons/DateRange';
import StarRate from '@material-ui/icons/StarRate';
import QueryString from 'query-string';

import { StyledPageSubTitle, StyledPaperSubTitle } from '../styles/page-title';
import MovieListCard from '../movie-card';
import {
  MovieListContainer,
  MovieListElementContainer,
} from '../styles/movie-list-style';
import {
  MovieProfileContainer,
  StyledPaper,
  MovieDetailContainer,
  MovieDetailInfoContainer,
  CastContainer,
  TrailerContainer,
  MovieDetailShortInfoBar,
  MovieDetailShortInfo,
  StyledIFrame,
  NoMarginTypography,
} from '../styles/movie-profile.style';

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

    if (loading || cast.length === 0) {
      return <CircularProgress />;
    }

    let filteredCast = [];

    // Limit 6 cast
    for (let i = 0; i < 6; i++) {
      filteredCast.push(cast[i]);
    }

    // Find youtube video
    const youtubeVideos = videos.filter(({ site }) => site === 'YouTube');

    return (
      <StyledPaper elevation={1}>
        <MovieDetailContainer>
          <img
            src={`http://image.tmdb.org/t/p/w300${poster_path}`}
            alt="movie poster"
          />
          <MovieDetailInfoContainer>
            <StyledPaperSubTitle>{`${title}`}</StyledPaperSubTitle>
            <MovieDetailShortInfoBar>
              <MovieDetailShortInfo>
                <DateRange />
                <NoMarginTypography gutterBottom variant="h6" component="h6">
                  {release_date}
                </NoMarginTypography>
              </MovieDetailShortInfo>
              <MovieDetailShortInfo>
                <StarRate />
                <NoMarginTypography gutterBottom variant="h6" component="h6">
                  {`${vote_average}/10.0`}
                </NoMarginTypography>
              </MovieDetailShortInfo>
              {runtime !== null && (
                <MovieDetailShortInfo>
                  <AccessTime />
                  <NoMarginTypography gutterBottom variant="h6" component="h6">
                    {`${runtime} minutes`}
                  </NoMarginTypography>
                </MovieDetailShortInfo>
              )}
            </MovieDetailShortInfoBar>
            <Typography gutterBottom variant="h6" component="h6">
              {`Overview`}
            </Typography>
            <Typography gutterBottom variant="body2" component="h6">
              {overview}
            </Typography>
          </MovieDetailInfoContainer>
        </MovieDetailContainer>
        <StyledPaperSubTitle>Cast</StyledPaperSubTitle>
        <CastContainer>
          <MovieListContainer>
            <MovieListElementContainer>
              {filteredCast.map(({ id, profile_path, name }) => (
                <MovieListCard
                  key={id}
                  handleClick={() => this.handleCardClick(id)}
                  img={profile_path}
                  title={name}
                />
              ))}
            </MovieListElementContainer>
          </MovieListContainer>
        </CastContainer>
        {youtubeVideos.length !== 0 && (
          <StyledPaperSubTitle>Trailer</StyledPaperSubTitle>
        )}
        {youtubeVideos.length !== 0 && (
          <TrailerContainer>
            {youtubeVideos.map(({ key, name }) => (
              <StyledIFrame
                title={name}
                key={key}
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${key}`}
              />
            ))}
          </TrailerContainer>
        )}
      </StyledPaper>
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
