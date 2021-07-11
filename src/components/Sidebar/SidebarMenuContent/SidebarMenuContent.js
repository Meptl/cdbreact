import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { MenuContent } from './SidebarMenuContent.style';
import { SidebarContext } from '../Sidebar';
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";


const SidebarMenuContent = forwardRef(({ children, className, isShy, ...rest }, ref) => {
  const menuContentRef = ref ? ref : React.createRef();
  const { toggled } = useContext(SidebarContext);
  return (
    <ThemeProvider theme={theme}>
      <MenuContent
        {...rest}
        ref={menuContentRef}
        className={classNames(className, { toggled }, { isShy })}
      >
        {children}
      </MenuContent>
    </ThemeProvider>
  );
});


SidebarMenuContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isShy: PropTypes.bool
}

export default SidebarMenuContent;

export { SidebarMenuContent as CDBSidebarMenuContent };
