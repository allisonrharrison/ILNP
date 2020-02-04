import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/ActionCreators";
import ItemScroll from "./ItemScroll";

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

const items = [
  {
    src: 'https://i.imgur.com/Y59LSyH.png',
    altText: 'Slide 1'
  },
  {
    src: 'https://i.imgur.com/NCdzliy.png',
    altText: 'Slide 2'
  },
  {
    src: 'https://i.imgur.com/jrNebZg.png',
    altText: 'Slide 3'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="col-12"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="container col-12">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div className="coll-row">
      <h2>SNOWED IN COLLECTION - WINTER 2019</h2>
      <hr />
      <ItemScroll collection="snowedin"/>
      </div>
      <div className="coll-row">
      <h2>MONARCHY COLLECTION - FALL 2019</h2>
      <hr />
      <ItemScroll collection="monarchy"/>
      </div>
      <div className="coll-row">
      <h2>NINE TO FIVE COLLECTION - FALL 2019</h2>
      <hr />
      <ItemScroll collection="ninetofive"/>
      </div>
      <div className="coll-row">
      <h2>SUMMER FEELS - SUMMER 2019</h2>
      <hr />
      <ItemScroll collection="summerfeels"/>
      </div>
      <div className="coll-row">
      <h2>NEW YEAR'S COLLECTION - WINTER 2016</h2>
      <hr />
      <ItemScroll collection="newyears2016"/>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);