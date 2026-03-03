import { useRef } from "react";

import Gallery_24_3 from "/Gallery/Syrus_24/Gallery_3.webp";
import Gallery_24_8 from "/Gallery/Syrus_24/Gallery_8.webp";
import Gallery_24_10 from "/Gallery/Syrus_24/Gallery_10.webp";
import Gallery_24_12 from "/Gallery/Syrus_24/Gallery_12.webp";
import Gallery_24_13 from "/Gallery/Syrus_24/Gallery_13.webp";
import Gallery_24_14 from "/Gallery/Syrus_24/Gallery_14.webp";
import Gallery_25_1 from "/Gallery/Syrus_25/Gallery_1.webp";
import Gallery_25_2 from "/Gallery/Syrus_25/Gallery_2.webp";
import Gallery_25_3 from "/Gallery/Syrus_25/Gallery_3.webp";
import Gallery_25_4 from "/Gallery/Syrus_25/Gallery_4.webp";
import Gallery_25_5 from "/Gallery/Syrus_25/Gallery_5.webp";
import Gallery_25_6 from "/Gallery/Syrus_25/Gallery_6.webp";
import Gallery_25_7 from "/Gallery/Syrus_25/Gallery_7.webp";
import Gallery_25_8 from "/Gallery/Syrus_25/Gallery_8.webp";
import Gallery_25_9 from "/Gallery/Syrus_25/Gallery_9.webp";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Gallery.module.css";
import TiltImage from "../TiltImage/TiltImage";

function Gallery() {
  const galleryRef = useRef(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className={styles.section} id="gallery" ref={galleryRef}>
      <TiltImage
        src="/GTA/Gallery_Plate.webp"
        alt="Gallery"
        className={styles.tiltPlate}
        galleryRef={galleryRef}
      />
      <div className={styles.container}>
        <Carousel
          swipeable={true}
          draggable={false}
          autoPlay={true}
          arrows={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          customTransition="transform 700ms ease-in-out"
          transitionDuration={700}
        >
          {[
            { src: Gallery_24_3, alt: "Gallery Image 1" },
            { src: Gallery_24_8, alt: "Gallery Image 2" },
            { src: Gallery_24_10, alt: "Gallery Image 3" },
            { src: Gallery_24_12, alt: "Gallery Image 4" },
            { src: Gallery_24_13, alt: "Gallery Image 5" },
            { src: Gallery_24_14, alt: "Gallery Image 6" },
            { src: Gallery_25_1, alt: "Gallery Image 7" },
            { src: Gallery_25_2, alt: "Gallery Image 8" },
            { src: Gallery_25_3, alt: "Gallery Image 9" },
            { src: Gallery_25_4, alt: "Gallery Image 10" },
            { src: Gallery_25_5, alt: "Gallery Image 11" },
            { src: Gallery_25_6, alt: "Gallery Image 12" },
            { src: Gallery_25_7, alt: "Gallery Image 13" },
            { src: Gallery_25_8, alt: "Gallery Image 14" },
            { src: Gallery_25_9, alt: "Gallery Image 15" },
          ].map((item, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Gallery;
