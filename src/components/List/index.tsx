import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { List } from '../../store/ducks/lists/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/lists/actions';

interface StateProps {
  repositories: List[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map(repository =>  <li>{ repository.name }</li> )}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);