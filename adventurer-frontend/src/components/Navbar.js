import React from "react";
import {
  MDBContainer,
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
                <MDBNavLink id="navbar__Link" to="/sell">
                  Sell
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navbar__Link">
                <MDBNavLink id="navbar__Link" to="/buy">
                  Buy
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
      </MDBContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sell" component={SellersPage} />
        <Route path="/buy" component={BuyingPage} />
        <Route path="/armor" component={SellingArmor} />
        <Route path="/weapons" exact component={SellingWeapons} />
        <Route path="/potions" exact component={SellingPotions} />
      </Switch>
    </Router>
  );
};

export default Navbar;
