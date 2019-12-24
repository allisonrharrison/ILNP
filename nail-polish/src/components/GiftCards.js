import React, { Component } from "react";
import { Button, Breadcrumb,
  BreadcrumbItem, Card, CardImg, CardTitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/ActionCreators";
import Sort from './Sort';

const mapStateToProps = state => {
  return {
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

class GiftCards extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let giftcards = this.props.giftcards.map(item => {
      return (
        <div className="col-3 my-3 mx-0">
          <Card style={{ border: "none", width: "225px" }} key={item.id}>
            <CardImg src={item.img} alt={item.title} />
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
              <i className="fas fa-heart fa-sm"></i>
                <i className="fas fa-heart fa-sm"></i>
                <i className="fas fa-heart fa-sm"></i>
                <i className="fas fa-heart fa-sm"></i>
                <i className="fas fa-heart fa-sm"></i>&nbsp;|&nbsp;
                {item.reviews} Reviews
              </p>
              <p>${item.price}</p>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div id="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>GIFT CARDS</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h3 className="center">GIFT CARDS</h3>
        <div className="col">
        <Sort />
        <div className="row">
          {giftcards}
        </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftCards);
