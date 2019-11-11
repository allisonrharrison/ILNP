import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, Input, Button } from "reactstrap";

const NavBar = () => {
  return (
    <Router>
      <div className="col-12 mx-auto">
      <Navbar expand="lg">
        <Nav className="justify-content" navbar>
          <NavItem className="p-4">
            <Link to="./Home.js">HOME</Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">ALL NAIL POLISH</Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">HOLOGRAPHICS <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">ULTRA CHROMES <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">ULTRA METALLICS <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">JELLIES <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">SHIMMERS <i class="fas fa-sort-down"></i></Link>
          </NavItem>
          <NavItem className="p-4">
            <Link to="/">GIFT CARDS</Link>
          </NavItem>
          <NavItem className="p-4">&nbsp;|&nbsp;</NavItem>
          <Form className="form-inline">
            <Input
              className="form-control border-0"
              type="search"
              placeholder="FIND YOUR POLISH"
              aria-label="Search"
            />
            <Button className="btn btn-light p-4" type="submit">
            <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Nav>
      </Navbar>
      <hr />
      </div>
    </Router>
  );
};

export default NavBar;
