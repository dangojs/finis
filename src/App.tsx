import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link</MenuItem>
        </Menu>
        <h1>Hello world</h1>
        <Button className="custom">Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Button</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="https://wwww.baidu.com" target="_blank">Baidu Link</Button>
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
