// @flow

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import AccessTime from '@material-ui/icons/AccessTime';
import DateRange from '@material-ui/icons/DateRange';
import StarRate from '@material-ui/icons/StarRate';

import { StyledPaperSubTitle } from './styles/page-title';
import ListCard from './list-card';
import { ListContainer, ListElementContainer } from './styles/list-style';
import {
  StyledPaper,
  DetailContainer,
  DetailInfoContainer,
  CastContainer,
  TrailerContainer,
  DetailShortInfoBar,
  DetailShortInfo,
  StyledIFrame,
  NoMarginTypography,
  StyledWarningIcon,
} from './styles/profile-style';

const Profile = ({
  title,
  poster_path,
  date,
  rating,
  overview,
  overview_title,
  runtime,
  credit,
  creditTitle,
  videos = [],
  loading,
  handleCardClick,
}: any) => {
  if (loading || credit.length === 0) {
    return <CircularProgress />;
  }

  let filteredCast = [];

  // Limit MAX 6 cast
  const MAX_CREDIT = credit.length > 6 ? 6 : credit.length;

  for (let i = 0; i < MAX_CREDIT; i++) {
    filteredCast.push(credit[i]);
  }

  // Find youtube video
  const youtubeVideos = videos.filter(({ site }) => site === 'YouTube');

  return (
    <StyledPaper elevation={1}>
      <DetailContainer>
        {poster_path === null ? (
          <center>
            <StyledWarningIcon />
          </center>
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster"
            height="450"
          />
        )}

        <DetailInfoContainer>
          <StyledPaperSubTitle>{`${title}`}</StyledPaperSubTitle>
          {date !== undefined && (
            <DetailShortInfoBar>
              <DetailShortInfo>
                <DateRange />
                <NoMarginTypography gutterBottom variant="h6" component="h6">
                  {date}
                </NoMarginTypography>
              </DetailShortInfo>
              {rating !== undefined && (
                <DetailShortInfo>
                  <StarRate />
                  <NoMarginTypography gutterBottom variant="h6" component="h6">
                    {`${rating}/10.0`}
                  </NoMarginTypography>
                </DetailShortInfo>
              )}
              {runtime !== undefined && (
                <DetailShortInfo>
                  <AccessTime />
                  <NoMarginTypography gutterBottom variant="h6" component="h6">
                    {`${runtime} minutes`}
                  </NoMarginTypography>
                </DetailShortInfo>
              )}
            </DetailShortInfoBar>
          )}
          <Typography gutterBottom variant="h6" component="h6">
            {overview_title}
          </Typography>
          <Typography gutterBottom variant="body2" component="h6">
            {overview}
          </Typography>
        </DetailInfoContainer>
      </DetailContainer>
      <StyledPaperSubTitle>{creditTitle}</StyledPaperSubTitle>
      <CastContainer>
        <ListContainer>
          <ListElementContainer>
            {filteredCast.map(({ id, img_path, name }) => (
              <ListCard
                key={id}
                handleClick={() => handleCardClick(id)}
                img={img_path}
                title={name}
              />
            ))}
          </ListElementContainer>
        </ListContainer>
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
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${key}`}
            />
          ))}
        </TrailerContainer>
      )}
    </StyledPaper>
  );
};

export default Profile;
