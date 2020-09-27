import React from 'react';

// JSX
// Компоненты. Функциональные, классовые
// У компонента есть данные: свойства (props) и состояния (state)
function Hello(props) {
    return <div style={{ color: 'red' }} title={props.message} className="someclass" data-id="0">
      {props.message}
    </div>;
};

export default Hello;