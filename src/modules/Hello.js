import React from 'react';

function Hello(props) {
    return <div style={{ color: 'red' }} title={props.message} className="someclass" data-id="0">
        {props.message}
    </div>;
}

export default Hello;
