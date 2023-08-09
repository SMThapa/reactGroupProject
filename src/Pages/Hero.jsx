import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';








export const Hero = () => {

  const [index, setIndex] = useState(0);
  
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img src="https://img.freepik.com/premium-photo/sports-car-wallpaper-lightning-falling-speed-concept_713888-771.jpg?w=2000" alt="" width={'1600px'} height={'1px'} />
      {/* <ExampleCarouselImage text="First slide" /> */}
      <Carousel.Caption>
        <h3>First slide label</h3>
        <button class="button button2">Shadow on Hover</button>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {/* <ExampleCarouselImage text="Second slide" /> */}
      <img src="https://wallpaperaccess.com/full/51364.jpg" alt="" width={'1600px'} height={'2px'} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <button class="button button2">Shadow on Hover</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt=""  width={'2000px'} height={'2px'}/>
      {/* <ExampleCarouselImage text="Third slide" /> */}
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <button class="button button2">Shadow on Hover</button>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )}

 
