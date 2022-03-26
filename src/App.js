import './App.css';
import React from 'react';
import { Menu, NewColor, Colors} from './components/containers.js'

const App = () => {
    return (
      <div className="app">
        <NewColor />
        <Menu />
        <Colors />
      </div>
  )}

export default App
