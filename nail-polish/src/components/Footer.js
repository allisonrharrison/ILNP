import React from "react";

const Footer = () => {
  return (
    <div className="container col-12 py-5 foot">
      <div className="row">
        <div className="col-2">
          <ul>
            <li className="text-light">
              <strong>CUSTOMER SERVICE</strong>
            </li>
            <li>Customer Service Home</li>
            <li>Shipping Information</li>
            <li>Tracking Orders</li>
            <li>Lost or Damaged Goods</li>
            <li>Returns & Exchanges</li>
            <li>Frequently Asked Questions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="text-light">
              <strong>INFORMATION</strong>
            </li>
            <li>Cruelty Free / Vegan Policy</li>
            <li>Free Shipping</li>
            <li>Nail & Beauty Bloggers</li>
            <li>Wholesale</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="text-light">
              <strong>MY ACCOUNT</strong>
            </li>
            <li>My Account</li>
            <li>My Orders</li>
            <li>My Address Book</li>
            <li>My Reward</li>
            <li>My Wishlist</li>
            <li>Check Gift Card Balance</li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>&nbsp;</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
            <li>Sitemap</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="col-2 offset-1 mt-5">
          <div className="col">
            <div className="row">
              <p className="text-center">Follow Us On:</p>
            </div>
            <div className="row py-2">
              <i className="fab fa-twitter text-light pr-3"></i>
              <i className="fab fa-facebook-f text-light px-3"></i>
              <i className="fab fa-instagram text-light px-3"></i>
              <i className="fab fa-youtube text-light px-3"></i>
              <i className="fab fa-pinterest text-light pl-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
