// @flow

import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  StyledMovieListCard,
  StyledMovieListCardMedia,
  StyledMovieListCardActionArea,
} from './styles/movie-list-style';

const MovieListCard = ({ img, title }: any) => (
  <StyledMovieListCard>
    <StyledMovieListCardActionArea>
      <StyledMovieListCardMedia
        image={`http://image.tmdb.org/t/p/w185${img}`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {title}
        </Typography>
      </CardContent>
    </StyledMovieListCardActionArea>
  </StyledMovieListCard>
);

export default MovieListCard;
