import React, { useState } from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import Transition from './components/Transition/transition';
library.add(fas);

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="primary" size="10x" />
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['1']}>
          <MenuItem>cool link 0</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 0
            </MenuItem>
            <MenuItem>
              dropdown 1
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 2
          </MenuItem>
        </Menu>
        <Button size={ButtonSize.Large} onClick={() => setShow(!show)}>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
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
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
