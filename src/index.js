import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// JSX
function Hello() {
  return <div>Hello World</div>;
}

ReactDOM.render(
   //React.createElement('div', {}, 'Hello World'),
   <Hello />,
   document.getElementById('root')
);