import styled from '@emotion/styled';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const MovieProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  min-width: 700px;
  max-width: 1000px;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  padding-left: 70px;
  padding-right: 70px;
`;

export const NoMarginTypography = styled(Typography)`
  margin: 0px;
  margin-left: 10px;
`;

export const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const MovieDetailInfoContainer = styled.div`
  padding-left: 20px;
`;

export const MovieDetailShortInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MovieDetailShortInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CastContainer = styled.div`
  width: 100%;
`;

export const TrailerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledIFrame = styled.iframe`
  margin-top: 20px;
  margin-bottom: 20px;
`;
