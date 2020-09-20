import React from 'react';
import './style/index.sass';
import './style/Menu.sass';
import Menu from './component/Menu';
import Page from './component/Page';

function App() {
  return (
    <div className="App">
      <Menu />
      <Page />
    </div>
  );
}

export default App;
