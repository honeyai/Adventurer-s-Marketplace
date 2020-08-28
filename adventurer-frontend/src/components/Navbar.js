import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import './Styles/navbar.css';
import Logo from "./Logo";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Link } from "react-router-dom";
import SellersPage from "./SellersPage";
import SellingArmor from "./SellingArmor";
import SellingWeapons from "./SellingWeapons";
import SellingPotions from "./SellingPotions";
import BuyingPage from "./BuyingPage";

const Navbar = () => {
  //Beyond MVP: add drop down menu on the sell link and buy link
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
              <MDBNavItem className="navbar__Link">
                <MDBNavLink id="navbar__Link" to="/buying">
                  Buy
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selling" component={SellersPage} />
        <Route path="/buying" component={BuyingPage} />
        <Route path="/armor" component={SellingArmor} />
        <Route path="/weapons" component={SellingWeapons} />
        <Route path="/potions" component={SellingPotions} />
      </Switch>
    </Router>
  );
};

export default Navbar;
