// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import QueryString from 'query-string';

import { MOVIE_PROFILE_PAGE_ROUTE } from '../../routes';
import { StyledPageSubTitle } from '../styles/page-title';
import Profile from '../profile';
import { MovieProfileContainer } from '../styles/movie-profile-style';

type Props = {
  personProfile: any,
  castInMovie: any,
  loading: boolean,
  fetchPersonDetail: Function,
  location: { search: any },
  history: any,
};

class PersonProfilePage extends Component<Props> {
  constructor(props) {
    super();

    const {
      location: { search },
    } = props;

    const { personId } = QueryString.parse(search);

    this.personId = personId;
  }

  personId: string;

  componentDidMount() {
    const { fetchPersonDetail } = this.props;

    fetchPersonDetail(this.personId);
  }

  // Redirect to movie profile
  handleCardClick(id) {
    const { history } = this.props;

    history.push(`${MOVIE_PROFILE_PAGE_ROUTE}?movieId=${id}`);
  }

  renderProfile() {
    const {
      personProfile: {
        personResult: { name, profile_path, birthday, biography },
        castInMovie: { cast },
        loading,
      },
    } = this.props;

    const modifiedCast = cast.map(element => {
      element.img_path = element.poster_path;
      element.name = element.title;

      return element;
    });

    return (
      <Profile
        title={name}
        poster_path={profile_path}
        date={birthday}
        overview={biography}
        overview_title="Biography"
        credit={modifiedCast}
        creditTitle="Cast In Movie"
        loading={loading}
        handleCardClick={id => this.handleCardClick(id)}
      />
    );
  }

  render() {
    return (
      <MovieProfileContainer>
        <StyledPageSubTitle> Person Profile </StyledPageSubTitle>
        {this.renderProfile()}
      </MovieProfileContainer>
    );
  }
}

export default withRouter(PersonProfilePage);
