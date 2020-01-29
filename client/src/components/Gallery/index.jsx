import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class Gallery extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      galleryItems: ["./images/balcony.jpg", "./images/kitchen.jpg", "./images/outside.jpg", "./images/bathroom.jpg", "./apartment-inside.jpg"].map((i) => <h2 key={i}><img src="{i}" alt="" /></h2>),
    }
  };

  //   responsive = {
  //     0: { items: 3 },
  //     1024: { items: 2 },
  //   }

// import Pictures from './images'

class Gallery extends React.Component {
  state = {
//      galleryItems: [Pictures[0],Pictures[1],Pictures[2]].map((i) => <h2 key={i}>{i}</h2>),
    galleryItems: [`./images/balcony.jpg`,"./images/kitchen.jpg","./images/outside.jpg","./images/bathroom.jpg","./apartment-inside.jpg","./images/pool.jpg","./images/fridge.jpg"].map((i) => <h2 key={i}>{i}</h2>),
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }
 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    return (
      <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    )
  }
}

export default Gallery;