import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="container col-12 mb-5">
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
    <div className="my-5">
      <h2>SNOWED IN COLLECTION - WINTER 2019</h2>
      </div>
      <div className="my-5">
      <h2>MONARCHY COLLECTION - FALL 2019</h2>
      </div>
      <div className="my-5">
      <h2>NINE TO FIVE COLLECTION - FALL 2019</h2>
      </div>
      <div className="my-5">
      <h2>SUMMER FEELS - SUMMER 2019</h2>
      </div>
      <div className="my-5">
      <h2>THE BOARDWALK COLLECTION - SUMMER 2019</h2>
      </div>
      <div className="my-5">
      <h2>SUGAR LUSH - SPRING 2019</h2>
      </div>
      <div className="my-5">
      <h2>TRANQUILITY - SPRING 2019</h2>
      </div>
    </div>
  );
}

export default Home;