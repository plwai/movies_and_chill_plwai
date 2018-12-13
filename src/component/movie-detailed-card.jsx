// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import {
  StyledMovieDetailedListCard,
  StyledMovieDetailedListCardMedia,
  StyledMovieDetailedListCardActionArea,
  StyledTopContainer,
  StyledWarningIcon,
  StyledOverviewContainer,
  StyledCardActionContainer,
  StyledMovieDetailedCardContent,
  TitleContainer,
  RatingContainer,
} from './styles/movie-detailed-list-style';

const MovieDetailListCard = ({ img, title, voteAvg, overview }: any) => (
  <StyledMovieDetailedListCard>
    <StyledMovieDetailedListCardActionArea>
      {img === null ? (
        <StyledWarningIcon />
      ) : (
        <StyledMovieDetailedListCardMedia
          image={`http://image.tmdb.org/t/p/w185${img}`}
          title={title}
        />
      )}
    </StyledMovieDetailedListCardActionArea>
    <StyledMovieDetailedCardContent>
      <StyledTopContainer>
        <TitleContainer>
          <Typography gutterBottom variant="h5" component="h4">
            {title}
          </Typography>
        </TitleContainer>
        <RatingContainer>
          <Typography gutterBottom variant="h5" component="h4">
            {`Rating: ${voteAvg}/10`}
          </Typography>
        </RatingContainer>
      </StyledTopContainer>

      <StyledOverviewContainer>
        <Typography gutterBottom variant="body2" component="body2">
          {overview}
        </Typography>
      </StyledOverviewContainer>
      <StyledCardActionContainer>
        <span />
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </StyledCardActionContainer>
    </StyledMovieDetailedCardContent>
  </StyledMovieDetailedListCard>
);

export default MovieDetailListCard;
