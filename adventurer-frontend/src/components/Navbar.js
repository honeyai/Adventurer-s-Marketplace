import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { Router, Switch } from "react-router";
import './Styles/navbar';

const Navbar = () => {
  return (
    <Router>
      <MDBContainer className="navbar__container navbar">
        <MDBNavbar className="navbar">
          <MDBContainer className="navbar__container">
            <MDBNavbarBrand className="navbar__Brand">
              <Link to="/">
                <Logo />
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarNav className="navbar__LinkContainer">
              <MDBNavItem className="navbar__Link">
                <MDBNavLink id="navbar__Link" to="/">
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navbar__Link">
                <MDBNavLink id="navbar__Link" to="/selling">
                  Sell
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selling" component={SellersPage} />
      </Switch>
    </Router>
  );
};

export default Navbar;
