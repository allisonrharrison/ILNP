import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, Input, Button } from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
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
              <NavItem
                id="1"
                className="px-4 py-1"
                onMouseEnter={this.handleMouseHover}
              >
                <Link to="/holographics">
                  HOLOGRAPHICS{" "}
                  <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="2"
                className="px-4 py-1"
                onMouseEnter={this.handleMouseHover}
              >
                <Link to="/ultrachromes">
                  ULTRA CHROMES{" "}
                  <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="3"
                className="px-4 py-1"
                onMouseEnter={this.handleMouseHover}
              >
                <Link to="/ultrametallics">
                  ULTRA METALLICS{" "}
                  <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="4"
                className="px-4 py-1"
                onMouseEnter={this.handleMouseHover}
              >
                <Link to="/jellies">
                  JELLIES <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="5"
                className="px-4 py-1"
                onMouseEnter={this.handleMouseHover}
              >
                <Link to="/shimmers">
                  SHIMMERS &nbsp;<i className="fas fa-chevron-down fa-xs"></i>
                </Link>
              </NavItem>
              <NavItem
                id="6"
                className="px-4 py-1"
                onMouseEnter={this.handleMouseHover}
              >
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
        {this.state.isHovering && (
          <div
            className="container col-12 dropDiv"
            onMouseLeave={this.handleMouseHover}
          >
            <DropNav />
          </div>
        )}
      </div>
    );
  }
}

const DropNav = () => {
  return (
    <div className="row">
      <div className="col-6 d-flex align-self-center justify-content-center">
        <ul>
          <li>
            <h2>HOLOGRAPHICS</h2>
          </li>
          <li>&nbsp;</li>
          <li>HOLOGRAPHIC NAIL POLISH</li>
          <li>ULTRA HOLO NAIL POLISH</li>
          <li>&nbsp;</li>
          <li>VIEW FULL COLLECTION</li>
        </ul>
      </div>
      <div className="col-6">
        <img src="https://www.ilnp.com/wp-content/uploads/2019/10/nav-holographic-nail-polish11.jpg.webp"></img>
      </div>
    </div>
  );
};

export default NavBar;
