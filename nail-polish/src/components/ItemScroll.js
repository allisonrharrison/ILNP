/*import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../App.css";
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

const MenuItem = ({ img, title, selected }) => {
  return (
  <Card className={`menu-item ${selected ? "active" : ""}`}>
    <CardImg style={{width: "200px"}}src={img}></CardImg>
    <CardTitle>{title}</CardTitle>
    </Card>);
};

export const Menu = (polish, selected) =>
  this.props.polish.map(el => {

    return <MenuItem text={this.props.polish.name} key={this.props.polish.id} selected={selected} />;
  });

const Arrow = ({ icon, className }) => {
  return <div className={className}>{icon}</div>;
};

export const ArrowLeft = Arrow({ icon: <i class="fas fa-chevron-left"></i>, className: "arrow-prev" });
export const ArrowRight = Arrow({ icon: <i class="fas fa-chevron-right"></i>, className: "arrow-next" });

class ItemScroll extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: this.props.polish.length,
    selected: "item1",
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(this.props.polish.slice(0, this.props.polish.length), this.state.selected);
  }

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = this.props.polish.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= this.props.polish.length && val >= 0
        ? +ev.target.value
        : this.props.polish.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(this.props.polish.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu
          ref={el => (this.menu = el)}
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          transition={+transition}
          onUpdate={this.onUpdate}
          onSelect={this.onSelect}
          selected={selected}
          translate={translate}
          alignCenter={alignCenter}
          scrollToSelected={true}
          dragging={dragging}
          clickWhenDrag={clickWhenDrag}
          wheel={wheel}
        />
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemScroll);*/
