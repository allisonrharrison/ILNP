import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, Input, Button } from "reactstrap";

const NavBar = () => {
  return (
    <div className="col-12 mx-auto">
      <Navbar expand="lg">
        <Nav className="justify-content border-bottom pb-3 mb-0" navbar>
          <NavItem className="px-4 py-1">
            <Link to="/">HOME</Link>
          </NavItem>
          <NavItem className="px-3 py-1">
            <Link to="/items">ALL NAIL POLISH</Link>
          </NavItem>
          <NavItem className="px-3 py-1">
            <Link to="/">
              HOLOGRAPHICS <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">
              ULTRA CHROMES <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">
              ULTRA METALLICS <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">
              JELLIES <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/">
              SHIMMERS &nbsp;<i className="fas fa-chevron-down fa-xs"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/giftcards">GIFT CARDS</Link>
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
  );
};

export default NavBar;
