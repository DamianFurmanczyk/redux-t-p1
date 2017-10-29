import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {onAnimeSelect} from '../actions/animeSelect.action';

class AnimeContainer extends Component {
  constructor(props) {
    super(props)

    this.p = this.props;
  }

  renderAnimeList() {
    return this
      .p
      .animeList
      .map(a => <li onClick={() => this.p.onAnimeSelect(a)} key={a.title}>{a.title}</li>);
  }

  render() {
    return (
      <ul>
        {this.renderAnimeList()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatcherFunction) {
  return bindActionCreators({
    onAnimeSelect
  }, dispatcherFunction);
}

function mapStateToProps({animeList}) {
  return {animeList};
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeContainer);