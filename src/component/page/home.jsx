// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { StyledPageSubTitle } from '../styles/page-title';
import {
  HomeContainer,
  HomeMovieContainer,
  StyledHomeCard,
  StyledHomeCardMedia,
  StyledHomeCardActionArea,
} from '../styles/home-style';

import { TRENDING_PAGE_ROUTE, POPULAR_PAGE_ROUTE } from '../../routes';

type MovieStates = {
  loading: Boolean,
  movie: Array<any>,
  error: string,
};

type Props = {
  fetchPopular: Function,
  fetchTrending: Function,

  trendingMovie: MovieStates,
  popularMovie: MovieStates,
};

const HomeCard = ({ img, title }: any) => (
  <StyledHomeCard>
    <StyledHomeCardActionArea>
      <StyledHomeCardMedia
        image={`http://image.tmdb.org/t/p/w185${img}`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {title}
        </Typography>
      </CardContent>
    </StyledHomeCardActionArea>
  </StyledHomeCard>
);

const HomeBrowseMoreCard = withRouter(({ history, path }) => (
  <StyledHomeCard>
    <StyledHomeCardActionArea onClick={() => history.push(path)}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          Browse More
        </Typography>
      </CardContent>
    </StyledHomeCardActionArea>
  </StyledHomeCard>
));

class Home extends Component<Props> {
  componentDidMount() {
    const { fetchPopular, fetchTrending } = this.props;

    fetchPopular();
    fetchTrending();
  }

  renderMovies(movies: any) {
    const { movie } = movies;

    if (movie === undefined) {
      return;
    }

    const renderResult = movies.movie.map(
      ({ id, poster_path, release_date, title, vote_average, overview }) => (
        <HomeCard key={id} img={poster_path} title={title} />
      )
    );

    return renderResult;
  }

  render() {
    const { trendingMovie, popularMovie } = this.props;

    return (
      <HomeContainer>
        <StyledPageSubTitle>Trending</StyledPageSubTitle>
        {trendingMovie.loading && <CircularProgress />}
        <HomeMovieContainer>
          {trendingMovie.error !== '' && trendingMovie.error}
          {this.renderMovies(trendingMovie)}
          {trendingMovie.movie !== undefined && (
            <HomeBrowseMoreCard path={TRENDING_PAGE_ROUTE} />
          )}
        </HomeMovieContainer>
        <StyledPageSubTitle>Popular</StyledPageSubTitle>
        {popularMovie.loading && <CircularProgress />}
        <HomeMovieContainer>
          {popularMovie.error !== '' && popularMovie.error}
          {this.renderMovies(popularMovie)}
          {trendingMovie.movie !== undefined && (
            <HomeBrowseMoreCard path={POPULAR_PAGE_ROUTE} />
          )}
        </HomeMovieContainer>
      </HomeContainer>
    );
  }
}
export default Home;
