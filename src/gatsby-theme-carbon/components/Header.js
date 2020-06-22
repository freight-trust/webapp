import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';

import {
  header,
  headerName,
  navLink,
  navLists,
  navLeftBorder,

  switcherButtonOpen,
  headerButton,
  switcherButton,

  globalBar,
} from './Header.module.scss';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';
import NavContext from 'gatsby-theme-carbon/src/util/context/NavContext';
import { Button } from 'carbon-components-react'
import { useAuth } from "react-use-auth";

const Header = ({ children }) => {
  const {
    toggleNavState,
    switcherIsOpen,
  } = useContext(NavContext);
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <ShellHeader aria-label="Header" className={header}>
        <Link
          className={headerName}
          to="/"
        >
          Freight Trust
        </Link>
        <div className={navLists}>
          {/* <div className={navLeftBorder}></div> */}
          <Link
            className={navLink}
            to="/freight"
          >
            Products
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Solutions
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Partners
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Marketplace
          </Link>
          <Link
            className={navLink}
            to="/"
          >
            Pricing
          </Link>
          <div
            className={navLink}
          >
            {
              isAuthenticated() ? <Button kind="primary" size='field' onClick={logout}>SIGN OUT</Button> :
              <Button kind="primary" size='field' onClick={login}>SIGN IN</Button>
            }
          </div>
        </div>
        
        <HeaderGlobalBar className={globalBar}>
          <HeaderGlobalAction
            className={cx(headerButton, switcherButton, {
              [switcherButtonOpen]: switcherIsOpen,
            })}
            aria-label="Switch"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>

      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => (
  <>
    Freight Trust<span>& Clearing</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
