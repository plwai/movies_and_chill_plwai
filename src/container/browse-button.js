// @flow

import { connect } from 'react-redux';

import { browsePopularMovie } from '../action/movie';
import NormalButton from '../component/normal-button';

const mapStateToProps = () => ({
  children: 'Browse Popular',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(browsePopularMovie());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NormalButton);
