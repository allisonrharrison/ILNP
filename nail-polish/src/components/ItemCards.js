import React, { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class ItemCards extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    return (
    this.props.items.map(item => {
      return (
        <div className="col-3 my-3 mx-0">
          <Card style={{ border: 'none', width: '225px' }} key={item.id}>
            <CardImg
              src={item.img}
              alt={item.title}
            />
            {
              <span
                to="/"
                className="btn-floating halfway-fab waves-effect waves-light red"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                <i className="material-icons">add</i>
              </span>
            }

            <CardBody>
              <CardTitle>
                <h5>{item.title}</h5>
              </CardTitle>
              <p>
                <i className="fas fa-heart"></i> {item.rating}&nbsp;|&nbsp;{item.reviews}{" "}
                Reviews
              </p>
              <p>${item.price}</p>
            </CardBody>
          </Card>
        </div>
      );
    }));
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemCards);