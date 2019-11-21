import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="container col-12 mt-3">
      <div className="row">
        <div className="col-3 offset-1">
          <div className="row">
            <a className="link" href="https://twitter.com/ilnpbrand">
              <i className="fab fa-twitter p-3"></i>
            </a>
            <a className="link" href="https://www.facebook.com/ilnpbrand">
              <i className="fab fa-facebook-f p-3"></i>
            </a>
            <a className="link" href="https://www.instagram.com/ilnp/">
              <i className="fab fa-instagram p-3"></i>
            </a>
            <a className="link" href="https://www.youtube.com/user/ilnpbrand">
              <i className="fab fa-youtube p-3"></i>
            </a>
            <a className="link" href="https://www.pinterest.com/ilnpbrand/">
              <i className="fab fa-pinterest p-3"></i>
            </a>
          </div>
          <div className="row py-2">
            <p className="smallText">CONNECT WITH US ON SOCIAL MEDIA</p>
          </div>
        </div>

        <div className="col-4">
          <div className="col-4 offset-4">
            <NavLink to="/" className="link">
              <div className="row">
                <h1>ILNP</h1>
              </div>
              <div className="row">
                <p className="smallText text-bold">BOUTIQUE COSMETICS</p>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="col-3 offset-1">
          <div className="row">
            <div className="col-3">
              <div className="row">
                <i className="fas fa-balance-scale-left p-3"></i>
              </div>
              <div className="row">
                <p className="smallText py-2">COMPARE</p>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <i className="fas fa-shopping-cart p-3"></i>
              </div>
              <div className="row">
                <p className="smallText py-2">MY CART</p>
              </div>
            </div>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle tag="div">
                <div>
                  <div className="row">
                    &nbsp;<i className="fas fa-user-circle p-3"></i>
                  </div>
                  <div className="row">
                    <p className="smallText py-2 text-left">
                    ACCOUNT <i className="fas fa-caret-down fa-sm"></i>
                    </p>
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <p className="text-left"><i className="fas fa-info-circle fa-lg"></i> &nbsp;Overview</p>
                </DropdownItem>
                <DropdownItem>
                <p className="text-left">&nbsp;<i className="fas fa-dollar-sign fa-lg"></i> &nbsp;Rewards Center</p>
                </DropdownItem>
                <DropdownItem>
                <p className="text-left"><i className="fas fa-heart fa-lg"></i> &nbsp;My Wishlist</p>
                </DropdownItem>
                <DropdownItem>
                <p className="text-left"><i className="fas fa-user-circle fa-lg"></i> &nbsp;Account
                  Information</p>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <p className="text-left"><i className="fas fa-sign-in-alt fa-lg"></i> &nbsp;Login</p>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
