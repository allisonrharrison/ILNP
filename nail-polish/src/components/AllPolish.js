import React, { Component } from "react";
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import ItemCards from "./ItemCards";

class AllPolish extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div className="container">
        <div id="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>ALL ILNP NAIL POLISH</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h3 className="center">ALL ILNP NAIL POLISH</h3>
        <div className="row">
          <ItemCards />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPolish);