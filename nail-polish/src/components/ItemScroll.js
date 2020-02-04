import React, { Component } from "react";
import { Col, Row, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";
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

class ItemScroll extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.collection = props.collection;
  }

  render() {

    return (
        <Col>
        <Row>
        <div className="left">
          <button className="scroll-button ml-5" id="left-button"><i className="fas fa-angle-left fa-2x"></i></button>
        </div>
        <div className="center" id="content" ref={this.contentRef}>
          <ScrollCards polish={this.props.polish} collection={this.collection} />
        </div>
        <div className="right">
          <button className="scroll-button" id="right-button"><i className="fas fa-angle-right fa-2x"></i></button>
        </div>
        </Row>
        </Col>
    );
  }
}

class ScrollCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filtCards = this.props.polish.filter((p) => p.collection === this.props.collection);

  return filtCards.map(item => {
      return (
      <div className="col-2 px-0 m-4 cardHover internal">
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemScroll);
