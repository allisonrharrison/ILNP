import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, Input, Button } from "reactstrap";

const NavBar = () => {
  return (
    <Router>
      <div className="col-12 mx-auto">
      <Navbar expand="lg">
        <Nav className="justify-content border-bottom pb-3 mb-0" navbar>
          <NavItem className="px-4 py-1">
            <Link to="./Home.js">HOME</Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">ALL NAIL POLISH</Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">HOLOGRAPHICS <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">ULTRA CHROMES <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">ULTRA METALLICS <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">JELLIES <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">SHIMMERS <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">GIFT CARDS</Link>
          </NavItem>
          <NavItem className="px-4 py-1">&nbsp;|&nbsp;</NavItem>
          <NavItem className="px-4">
            <Form inline>
            <Input
              className="border-0"
              type="search"
              placeholder="FIND YOUR POLISH"
              aria-label="Search"
              id="search"
            />
            <Button className="btn btn-light" type="submit">
            <i className="fas fa-search"></i>
            </Button>
          </Form>
          </NavItem>
        </Nav>
      </Navbar>
      </div>
    </Router>
  );
};

export default NavBar;
