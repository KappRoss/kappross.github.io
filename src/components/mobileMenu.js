import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { propTypes } from 'react-addons-css-transition-group';

function MobileMenu(props) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node} >
        <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} style={{outline: 'none'}}/>
            <Menu language={props.language} open={open} setOpen={setOpen} id={menuId} style={{outline: 'none'}}/>
            </FocusLock>
        </div>      
      </>
    </ThemeProvider>
  );
}

export default MobileMenu;