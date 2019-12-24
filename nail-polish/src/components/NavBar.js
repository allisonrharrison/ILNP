import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, Input, Button } from "reactstrap";

const NavBar = () => {
  return (
    <div className="container col-12">
      <div className="row ml-1">
      <Navbar expand="lg">
        <Nav className="justify-content border-bottom pb-3 mb-0" navbar>
          <NavItem className="pr-4 py-1">
            <Link to="/">HOME</Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/allpolish">ALL NAIL POLISH</Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/holographics">
              HOLOGRAPHICS <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/ultrachromes">
              ULTRA CHROMES <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/ultrametallics">
              ULTRA METALLICS <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/jellies">
              JELLIES <i className="fas fa-chevron-down fa-xs fa-fw"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/shimmers">
              SHIMMERS &nbsp;<i className="fas fa-chevron-down fa-xs"></i>
            </Link>
          </NavItem>
          <NavItem className="px-4 py-1">
            <Link to="/giftcards">GIFT CARDS</Link>
          </NavItem>
          <NavItem className="px-4 py-1">&nbsp;|&nbsp;</NavItem>
          <NavItem className="pl-4">
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
    </div>
  );
};

export default NavBar;
