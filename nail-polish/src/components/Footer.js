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
            <a
              className="text-light"
              href="https://www.ilnp.com/customer-service/"
            >
              <li>Customer Service Home</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/shipping-information-us-canada-international/"
            >
              <li>Shipping Information</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/tracking-orders/"
            >
              <li>Tracking Orders</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/lost-or-damaged-products/"
            >
              <li>Lost or Damaged Goods</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/returns-exchanges/"
            >
              <li>Returns & Exchanges</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/about-our-products/"
            >
              <li>Frequently Asked Questions</li>
            </a>
            <a className="text-light" href="https://www.ilnp.com/contact-us/">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="text-light">
              <strong>INFORMATION</strong>
            </li>
            <a
              className="text-light"
              href="https://www.ilnp.com/about-our-products/"
            >
              <li>Cruelty Free / Vegan Policy</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/free-shipping/"
            >
              <li>Free Shipping</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/nail-beauty-bloggers/"
            >
              <li>Nail & Beauty Bloggers</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/wholesale-orders-resellers/"
            >
              <li>Wholesale</li>
            </a>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="text-light">
              <strong>MY ACCOUNT</strong>
            </li>
            <a
              className="text-light"
              href="https://www.ilnp.com/my-account/edit-account/"
            >
              <li>My Account</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/my-account/orders/"
            >
              <li>My Orders</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/my-account/edit-address/"
            >
              <li>My Address Book</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/my-account/my-rewards/"
            >
              <li>My Reward</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/my-account/my-wishlist/"
            >
              <li>My Wishlist</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/check-gift-card-html/"
            >
              <li>Check Gift Card Balance</li>
            </a>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li>&nbsp;</li>
            <a
              className="text-light"
              href="https://www.ilnp.com/privacy-policy/"
            >
              <li>Privacy Policy</li>
            </a>
            <a className="text-light" href="https://www.ilnp.com/terms/">
              <li>Terms & Conditions</li>
            </a>
            <a className="text-light" href="https://www.ilnp.com/disclaimer/">
              <li>Disclaimer</li>
            </a>
            <a className="text-light" href="https://www.ilnp.com/sitemap/">
              {" "}
              <li>Sitemap</li>
            </a>
            <a
              className="text-light"
              href="https://www.ilnp.com/what-are-cookies/"
            >
              <li>Cookies</li>
            </a>
          </ul>
        </div>
        <div className="col-2 offset-1 mt-5">
          <div className="col">
            <div className="row">
              <p className="text-center">Follow Us On:</p>
            </div>
            <div className="row py-2">
              <a className="text-light" href="https://twitter.com/ilnpbrand">
                <i className="fab fa-twitter fa-lg p-2"></i>
              </a>
              <a
                className="text-light"
                href="https://www.facebook.com/ilnpbrand"
              >
                <i className="fab fa-facebook-f fa-lg p-2"></i>
              </a>
              <a className="text-light" href="https://www.instagram.com/ilnp/">
                <i className="fab fa-instagram fa-lg p-2"></i>
              </a>
              <a
                className="text-light"
                href="https://www.youtube.com/user/ilnpbrand"
              >
                <i className="fab fa-youtube fa-lg p-2"></i>
              </a>
              <a
                className="text-light"
                href="https://www.pinterest.com/ilnpbrand/"
              >
                <i className="fab fa-pinterest fa-lg p-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
