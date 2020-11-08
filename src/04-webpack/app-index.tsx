import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { ComponentWithState } from './ComponentWithState';

const App = () => {
  return <div>
    <ComponentWithState />
  </div>

}

ReactDOM.render(<App />, document.getElementById('root'));