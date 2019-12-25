// @flow

import { connect } from 'react-redux';

import { getCastDetails } from '../action/person-profile';

import PersonProfilePage from '../component/page/person-profile';

const mapStateToProps = state => ({
  personProfile: state.personProfile,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchPersonDetail: (id: number) => {
    dispatch(getCastDetails(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonProfilePage);
