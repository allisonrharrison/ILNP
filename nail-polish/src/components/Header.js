import React from "react";

const Header = () => {
  return (
    <div className="container col-12 mt-3">
      <div className="row">
        <div className="col-3 offset-1">
          <div className="row">
            <i className="fab fa-twitter p-3"></i>
            <i className="fab fa-facebook-f p-3"></i>
            <i className="fab fa-instagram p-3"></i>
            <i className="fab fa-youtube p-3"></i>
            <i className="fab fa-pinterest p-3"></i>
          </div>
          <div className="row py-2">
            <p className="smallText">CONNECT WITH US ON SOCIAL MEDIA</p>
          </div>
        </div>

        <div className="col-4">
          <div className="col-4 offset-4">
          <div className="row">
          <h1>ILNP</h1>
          </div>
          <div className="row">
          <p className="smallText text-bold">BOUTIQUE COSMETICS</p>
          </div>
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

            <div className="col-3">
          <div className="row">
          <i className="fas fa-user-circle p-3"></i>
            </div>
            <div className="row">
            <p className="smallText py-2">ACCOUNT</p>
            </div>
            </div>
           
           </div> 
          </div>
      </div>
    </div>
  );
};
export default Header;
