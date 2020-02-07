import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    polish: state.polish,
    giftcards: state.giftcards
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col-12">
        <div className="row ml-1">
          <Navbar expand="lg">
            <Nav className="justify-content border-bottom pb-3 mb-0" navbar>
              <NavItem className="pr-4 py-1">
                <Link to="/ILNP">HOME</Link>
              </NavItem>
              <NavItem className="px-4 py-1">
                <Link to="/allpolish">ALL NAIL POLISH</Link>
              </NavItem>
              <NavItem
                id="1"
                className="px-4 py-1"
              >
                <Link to="/holographics">
                  HOLOGRAPHICS{" "}
                  <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="2"
                className="px-4 py-1"
              >
                <Link to="/ultrachromes">
                  ULTRA CHROMES{" "}
                  <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="3"
                className="px-4 py-1"
              >
                <Link to="/ultrametallics">
                  ULTRA METALLICS{" "}
                  <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="4"
                className="px-4 py-1"
              >
                <Link to="/jellies">
                  JELLIES <i className="fas fa-chevron-down fa-xs fa-fw"></i>
                </Link>
              </NavItem>
              <NavItem
                id="5"
                className="px-4 py-1"
              >
                <Link to="/shimmers">
                  SHIMMERS &nbsp;<i className="fas fa-chevron-down fa-xs"></i>
                </Link>
              </NavItem>
              <NavItem id="6" className="px-4 py-1">
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
        <div id="dropDiv"></div>
      </div>
    );
  }
}

const DropNav = props => {
  const dropnavs = [
    {
      id: 0,
      title: "Holographics",
      link1: "Holographic Nail Polish",
      link2: "Ultra Holo Nail Polish",
      img:
        "https://www.ilnp.com/wp-content/uploads/2019/10/nav-holographic-nail-polish11.jpg.webp"
    },
    {
      id: 1,
      title: "Ultra Chromes",
      link1: "Ultra Chrome Nail Polish",
      link2: "Ultra Chrome Flakies",
      img:
        "https://www.ilnp.com/wp-content/uploads/2019/10/nav-ultra-chromes-nail-polish11.jpg.webp"
    },
    {
      id: 2,
      title: "Ultra Metallics",
      link1: "Ultra Metallics",
      link2: "Ultra Metallic Brights",
      img:
        "https://www.ilnp.com/wp-content/uploads/2019/10/nav-ultra-metallics-nail-polish11.jpg.webp"
    },
    {
      id: 3,
      title: "Jellies",
      link1: "Jellies",
      link2: null,
      img:
        "https://www.ilnp.com/wp-content/uploads/2019/10/nav-jellies-nail-polish11.jpg.webp"
    },
    {
      id: 4,
      title: "Shimmers",
      link1: "Shimmers",
      link2: "Real Magic Toppers",
      img:
        "https://www.ilnp.com/wp-content/uploads/2019/10/nav-shimmer-nail-polish11.jpg.webp"
    }
  ];

  return (
    <div className="row dropDiv">
      <div className="col-6 d-flex align-self-center justify-content-center">
        <ul>
          <li>
            <h2>{dropnavs[props.id].title}</h2>
          </li>
          <li>&nbsp;</li>
          <li>{dropnavs[props.id].link1}</li>
          <li>{dropnavs[props.id].link2}</li>
          <li>&nbsp;</li>
          <li>VIEW FULL COLLECTION</li>
        </ul>
      </div>
      <div className="col-6">
        <img src={dropnavs[props.id].img}></img>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
