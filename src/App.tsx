import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Button>Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Small Button</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="https://wwww.baidu.com">Baidu Link</Button>
        <Button disabled btnType={ButtonType.Link} size={ButtonSize.Small} href="https://wwww.baidu.com">Disabled Baidu Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
