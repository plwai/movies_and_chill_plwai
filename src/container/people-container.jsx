// @flow

import { connect } from 'react-redux';

import { getPeople } from '../action/person';

import PersonListPage from '../component/page/person-list';

const mapStateToProps = state => ({
  person: state.person,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchPeople: (query: Object = {}) => {
    dispatch(getPeople(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonListPage);
