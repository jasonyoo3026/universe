import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import { LoginBtn, SignupBtn } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="custom-navbar">
      <Segment inverted>
        <Menu inverted secondary size="small">
          <Menu.Item />
          <NavLink
            to="/"
            exact
            className="custom-nav-link"
            activeClassName="custom-router-link-active"
          >
            Home
          </NavLink>

          <Menu.Item />
          <NavLink
            to="/search"
            exact
            className="custom-nav-link"
            activeClassName="custom-router-link-active"
          >
            Search
          </NavLink>

          <Menu.Item />
          <NavLink
            to="/mylist"
            exact
            className="custom-nav-link"
            activeClassName="custom-router-link-active"
          >
            List
          </NavLink>

          <Menu.Menu position="right">
            {!isAuthenticated && (
              <>
                <LoginBtn />
                <SignupBtn />
              </>
            )}
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
};

export default Navbar;
