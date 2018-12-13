// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListCard from '../list-card';

import { PEOPLE_PROFILE_PAGE_ROUTE } from '../../routes';
import { StyledPageSubTitle } from '../styles/page-title';
import { ListContainer, ListElementContainer } from '../styles/list-style';

type Props = {
  person: {
    results: any,
    page: number,
    loading: boolean,
    error: string,
  },
  history: any,
  fetchPeople: Function,
};

class MovieListPage extends Component<Props> {
  componentDidMount() {
    const {
      fetchPeople,
      person: { results },
    } = this.props;

    document.addEventListener('scroll', this.trackScrolling);

    if (results.length === 0) {
      fetchPeople();
    }
  }

  isBottom(el: any) {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 500;
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('scroll-check');
    if (this.isBottom(wrappedElement)) {
      let {
        fetchPeople,
        person: { loading, page },
      } = this.props;

      if (loading) {
        return;
      }

      page += 1;

      fetchPeople({ page });
    }
  };

  handleCardClick(id: number) {
    const { history } = this.props;

    history.push(`${PEOPLE_PROFILE_PAGE_ROUTE}?personId=${id}`);
  }

  renderPeople() {
    const {
      person: { results },
    } = this.props;

    if (results.length === 0) {
      return;
    }

    const renderResult = results.map(({ id, profile_path, name }) => (
      <ListCard
        key={id}
        handleClick={() => this.handleCardClick(id)}
        img={profile_path}
        title={name}
      />
    ));

    return renderResult;
  }

  render() {
    const {
      person: { error, loading },
    } = this.props;

    return (
      <ListContainer>
        <StyledPageSubTitle>Person</StyledPageSubTitle>
        <ListElementContainer>
          {error !== '' && error}
          {this.renderPeople()}
        </ListElementContainer>
        <div id="scroll-check" />
        {loading && <CircularProgress />}
      </ListContainer>
    );
  }
}
export default withRouter(MovieListPage);
