import { NavLink } from "react-router-dom";
import React from "react";
import { Menu, Segment } from 'semantic-ui-react';

import { Auth } from "../";

const Navbar = () => {
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
                        <Auth />
                    </Menu.Menu>
                </Menu>
            </Segment>
        </div>
    );
}

export default Navbar;
