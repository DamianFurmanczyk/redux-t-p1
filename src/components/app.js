import React, {Component} from 'react';

import AnimeListC from '../containers/anime.container';
import AnimeDetailsC from '../containers/anime-details.container'

export default class App extends Component {
  render() {
    return (
      <main>
        <AnimeListC/>
        <AnimeDetailsC/>
      </main>
    );
  }
}
