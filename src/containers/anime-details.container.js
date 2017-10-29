import React, {Component} from 'react';
import {connect} from 'react-redux';

class AnimeDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.branchOfState_SelectedAnime) {
      return <div>select a anime to see its details</div>
    }

    return (
      <div>
        <h3>Anime details</h3>
        <div>{`{title}: ${this.props.branchOfState_SelectedAnime.title}`}</div>
        <div>{`{episodes}: ${this.props.branchOfState_SelectedAnime.episodes}`}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {branchOfState_SelectedAnime: state.activeAnime};
  // na pocz jest nullem ten branch stora - store = to czym bawisz sie reduxem
}

export default connect(mapStateToProps)(AnimeDetailsContainer);