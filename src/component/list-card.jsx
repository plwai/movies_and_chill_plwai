// @flow

import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  StyledListCard,
  StyledListCardMedia,
  StyledListCardActionArea,
  StyledWarningIcon,
} from './styles/list-style';

const ListCard = ({ img, handleClick, title }: any) => (
  <StyledListCard>
    <StyledListCardActionArea onClick={handleClick}>
      {img === null ? (
        <center>
          <StyledWarningIcon />
        </center>
      ) : (
        <StyledListCardMedia
          image={`http://image.tmdb.org/t/p/w185${img}`}
          title={title}
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {title}
        </Typography>
      </CardContent>
    </StyledListCardActionArea>
  </StyledListCard>
);

export default ListCard;
