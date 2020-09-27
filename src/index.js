import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// JSX
// Компоненты. Функциональные, классовые
// У компонента есть данные: свойства (props) и состояния (state)
function Hello(props) {
  return <div style={{ color: 'red' }} title={props.message} className="someclass" data-id="0">
    {props.message}
  </div>;
}

function App() {
  return (
    <div>
      <Hello message="Hello World!" />
      <Hello message="Здравствуй Мир!"/>
      <Hello message="Здоровнькі були!"/>
    </div>
  );
}


ReactDOM.render(   
   <App />, //React.createElement('div', {}, 'Hello World'),
   document.getElementById('root')
);