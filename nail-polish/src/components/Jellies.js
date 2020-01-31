import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/ActionCreators";
import Sort from "./Sort";

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

const Jellies = props => {
    return (
      <div className="container">
      <div id="breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>JELLIES</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row justify-content-center">
      <h3 style={{letterSpacing: 4}}>JELLIES</h3>
      <h3 style={{color: 'grey'}}>&nbsp;{props.polish.filter((p) =>
      p.jelly === true
    ).length}</h3>
      </div>
      <div className="col">
        <Sort />
        <div className="row">
          <JellyCards polish={props.polish}/>
        </div>
      </div>
    </div>
    );
  }

class JellyCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filtJel = this.props.polish.filter((p) =>
      p.jelly === true
    );

    return filtJel.map(item => {
      return (
        <div className="col-2 px-0 m-4 cardHover">
          <Card
            key={item.id}
            style={{ border: "none" }}
            onMouseOver={this.handleHover}
            onMouseOut={this.handleHover}
          >
            <CardImg
              src={item.img}
              onMouseEnter={e => (e.currentTarget.src = item.hover)}
              onMouseLeave={e => (e.currentTarget.src = item.img)}
            />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jellies);
