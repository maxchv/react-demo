import React from 'react';
import Hello from './Hello';
import Button from './Button';

function App() {
    return (
      <div>
        <Hello message="Hello World!" />
        <Hello message="Здравствуй Мир!"/>
        <Hello message="Здоровнькі були!"/>
        <Button text="Жмакни меня" />
        <Button text="Жмакни меня" />
    </div>
    );
}
  
export default App;