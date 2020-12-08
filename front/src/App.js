import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Routes from './Routes'

import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig'
const store = storeConfig()


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
