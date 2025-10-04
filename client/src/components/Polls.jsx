import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPolls, getUserPolls, deletePoll } from '../store/actions';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id, e) {
    e.stopPropagation();
    this.props.deletePoll(id);
  }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
  }

  render() {
  const { getPolls, getUserPolls, auth } = this.props;
    const polls = this.props.polls.map(poll => (
      <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
        {auth.isAuthenticated && auth.user && poll.user === auth.user.id && (
          <button
            className="button"
            style={{ marginLeft: '1rem' }}
            onClick={e => this.handleDelete(poll._id, e)}
          >
            Delete
          </button>
        )}
      </li>
    ));

    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div className="buttons_center">
            <button className="button" onClick={getPolls}>
              All polls
            </button>
            <button className="button" onClick={getUserPolls}>
              My polls
            </button>
          </div>
        )}
        <ul className="polls">{polls}</ul>
      </Fragment>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls,
  }),
  { getPolls, getUserPolls, deletePoll },
)(Polls);
