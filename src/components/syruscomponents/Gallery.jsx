import { Container } from "react-bootstrap";
import Gallery6 from "../../assets/Gallery/Gallery_6.jpg";
import Gallery8 from "../../assets/Gallery/Gallery_8.jpeg";
import Gallery5 from "../../assets/Gallery/Gallery_5.jpg";
import Gallery7 from "../../assets/Gallery/Gallery_7.jpeg";
import Gallery9 from "../../assets/Gallery/Gallery_9.jpeg";
import Gallery10 from "../../assets/Gallery/Gallery_10.jpeg";
import Gallery11 from "../../assets/Gallery/Gallery_11.jpeg";
import Gallery12 from "../../assets/Gallery/Gallery_12.jpeg";
import Gallery13 from "../../assets/Gallery/Gallery_13.jpeg";
import Gallery14 from "../../assets/Gallery/Gallery_14.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Gallery() {
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
<section 
  className="bg-[#121211] text-white" 
  id="gallery"
>
  <Container style={{ maxWidth: '90%' }}>
    <h2 className="internal-headings" data-text="GALLERY">
      GALLERY
    </h2>
    <Carousel
      swipeable={true}
      draggable={true}
      autoPlay={true}
      arrows={true}
      responsive={responsive}
      ssr={true}  // Render on the server-side
      infinite={true}
      autoPlaySpeed={3000}  // Slower autoplay for better user experience
      keyBoardControl={true}
      customTransition="transform 700ms ease-in-out"
      transitionDuration={700}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {[
        { src: Gallery6, alt: "Gallery Image 1" },
        { src: Gallery8, alt: "Gallery Image 4" },
        { src: Gallery5, alt: "Gallery Image 2" },
        {src: Gallery11, alt: "Gallery Image 11"},
        {src: Gallery7, alt: "Gallery Image 5"},
        {src: Gallery9, alt: "Gallery Image 9"},
        {src: Gallery10, alt: "Gallery Image 10"},
        {src: Gallery12, alt: "Gallery Image 12"},
        {src: Gallery13, alt: "Gallery Image 13"},
        {src: Gallery14, alt: "Gallery Image 14"},
      ].map((item, index) => (
        <div key={index} className="mx-4">
          <img
            className="w-full h-350 object-cover border-2 border-[#f00] rounded-xl shadow-lg"
            src={item.src}
            alt={item.alt}
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  </Container>
</section>

  );
}

export default Gallery;