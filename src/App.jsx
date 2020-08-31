import React, { Component } from 'react';
import styles from './App.module.scss';

import ColorBox from './components/ColorBox/ColorBox.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <ColorBox />
      </div>
    )
  }
}

export default App;