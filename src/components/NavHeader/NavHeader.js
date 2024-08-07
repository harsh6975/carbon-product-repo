import { HeaderMenuButton } from "@carbon/react/new";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../Auth/auth-context";

import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from "@carbon/react";
import { Logout, UserAvatar } from "@carbon/react/icons";
import NavFile1 from "./NavFile1";

const NavHeader = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label={props.title}>
          <SkipToContent />
          <HeaderMenuButton
            ariaLabel="Open menu"
            onClick={onClickSideNavExpand}
            active={isSideNavExpanded}
             />
          <HeaderName element={Link} to="/" prefix="IBM">
            {props.title}
          </HeaderName>
          <HeaderNavigation aria-label="New Report" >
            <HeaderMenuItem element="Link" to="/newreport" >
              New Report
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/newreport1" >
                  New Report1
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/newreport2" >
                  New Report2
                </HeaderMenuItem>
                <HeaderMenuItem element="Link" to="/newreport3" >
                  New Report3
                </HeaderMenuItem>
                <NavFile1/>
                <HeaderMenuItem element={Link} to="/newreport4" >
                  New Report4
                </HeaderMenuItem>
                <HeaderMenuItem element="Link" to="/newreport4" >
                  New Report4
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <Link to="/userprofile">
              <HeaderGlobalAction aria-label="User Profile">
                <UserAvatar size={20} />
              </HeaderGlobalAction>
            </Link>
            <HeaderGlobalAction onClick={authCtx.onLogout} aria-label="Logout">
              <Logout size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default NavHeader;
