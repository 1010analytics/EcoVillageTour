import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import g1 from '../assests/gallery/g1.webp'
import g2 from '../assests/gallery/g2.webp'
import g3 from '../assests/gallery/g3.webp'
import g4 from '../assests/gallery/g4.webp'
import g5 from '../assests/gallery/g5.webp'
import g6 from '../assests/gallery/g6.webp'
import g7 from '../assests/gallery/g7.webp'

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <div className = 'm-10 pt-10 px-5 md:px-10 '> 
            <div className='text-2xl text-orange-950 font-medium mb-4 '>
                Gallery
            </div>

            <div>
            <Carousel
  
 
responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
autoPlay = {true}
  autoPlaySpeed={1500}
  showDots = {true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-5-px"
>
  <div><img src = {g1} className = 'size-80 ' /></div>
  <div><img src = {g2} className = 'size-80' /></div>
  <div><img src = {g3} className = 'size-80' /></div>
  <div><img src = {g4} className = 'size-80' /></div>
  <div><img src = {g5} className = 'size-80' /></div>
  <div><img src = {g6} className = 'size-80' /></div>
  <div><img src = {g7} className = 'size-80' /></div>
</Carousel>
            </div>

        </div>
    </>
  )
}

export default Gallery