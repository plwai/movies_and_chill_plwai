import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import WarningIcon from '@material-ui/icons/Warning';

export const MovieDetailedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MovieDetailedListElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledMovieDetailedListCard = styled(Card)`
  display: flex;
  width: 100%;
  max-width: 800px;
  min-width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledMovieDetailedListCardMedia = styled(CardMedia)`
  height: 300px;
  width: 250px;
`;

export const StyledWarningIcon = styled(WarningIcon)`
  height: 300px;
  width: 250px;
`;

export const StyledMovieDetailedListCardActionArea = styled(CardActionArea)`
  height: 100%;
  width: 100%;
  max-width: 250px;
`;

export const StyledMovieDetailedCardContent = styled(CardContent)`
  padding-bottom: 0px !important;
`;

export const StyledTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledContentContainer = styled.div`
  display: flex;
`;

export const StyledOverviewContainer = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  font-style: italic;
  height: 190px;
`;

export const StyledCardActionContainer = styled.div`
  display: flex;
  z-index: 999;
  width: 100%;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 25px;
  max-height: 30px;
`;

export const RatingContainer = styled.div`
  min-width: 150px;
`;
