import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/App';

// JSX
// Компоненты. Функциональные, классовые
// У компонента есть данные: свойства (props) и состояния (state)


ReactDOM.render(   
   <App />, //React.createElement('div', {}, 'Hello World'),
   document.getElementById('root')
);