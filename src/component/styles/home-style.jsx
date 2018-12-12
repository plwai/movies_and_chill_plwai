import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HomeMovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px 25px;
  justify-content: center;
  width: 80%;
  min-width: 500px;
`;

export const StyledHomeCard = styled(Card)`
  max-width: 350px;
  min-width: 200px;
`;

export const StyledHomeCardMedia = styled(CardMedia)`
  height: 250px;
`;

export const StyledHomeCardActionArea = styled(CardActionArea)`
  height: 100%;
`;
