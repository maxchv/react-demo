import React, {Component} from 'react';

// JSX
// Компоненты. Функциональные, классовые
// У компонента есть данные: свойства (props) и состояния (state)
class Hello extends Component {
    render() {
        return  <div style={{ color: 'red' }} title={this.props.message} className="someclass" data-id="0">
                    {this.props.message}
                </div>;
    }
}

export default Hello;