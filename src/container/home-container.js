// @flow

import { connect } from 'react-redux';

import { browsePopularMovie, browseTrendingMovie } from '../action/movie';
import Home from '../component/page/home';

const mapStateToProps = () => ({
  popularChildren: 'Browse Popular',
  trendingChildren: 'Browse Trending',
});

const mapDispatchToProps = dispatch => ({
  handlePopularClick: () => {
    dispatch(browsePopularMovie());
  },
  handleTrendingClick: () => {
    dispatch(browseTrendingMovie());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
