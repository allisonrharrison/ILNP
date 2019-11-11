import React from "react";
import { Table } from "reactstrap";

const Header = () => {
  return (
    <div className="container col-12 mt-3">
      <div className="row">
      <div className="col-4">
          <Table borderless>
            <tr>
              <td><i class="fab fa-twitter"></i></td>
              <td><i className="fab fa-facebook-f"></i></td>
              <td><i class="fab fa-instagram"></i></td>
              <td><i class="fab fa-youtube"></i></td>
              <td><i class="fab fa-pinterest"></i></td>
              </tr>
                </Table>
              <p className="smallText">CONNECT WITH US ON SOCIAL MEDIA</p>
        </div>

        <div className="col-4">
                <h1>I&nbsp;L&nbsp;N&nbsp;P</h1>
              <p className="smallText">BOUTIQUE COSMETICS</p>
        </div>

        <div className="col-4">
          <Table borderless>
            <tr>
              <td>
                <i class="fas fa-balance-scale-left"></i>
              </td>
              <td>
                <i className="fas fa-shopping-cart"></i>
              </td>
              <td>
                <i className="fas fa-user-circle"></i>
              </td>
            </tr>
            <tr>
              <td className="smallText">COMPARE</td>
              <td className="smallText">MY CART</td>
              <td className="smallText">ACCOUNT</td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Header;
