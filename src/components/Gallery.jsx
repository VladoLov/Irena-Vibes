import React, { useEffect, useState } from "react";
// import { useState } from "react";
// import { pictures } from "../data";
import image1 from "../images/bath.jpg"; // Import your gallery images
import image2 from "../images/bath2.jpg";
import image3 from "../images/bedroom.jpg";
import image4 from "../images/building.jpg";
import image5 from "../images/hallway 2.jpg";
import image6 from "../images/hallway.jpg";
import image7 from "../images/kitchen 2.jpg";
import image8 from "../images/kitchen.jpg";
import image9 from "../images/living room 2.jpg";
import image10 from "../images/living room.jpg";
import image11 from "../images/parking.jpg";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "./Title";

const Gallery = () => {
  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  const [currentPicture, setCurrentPicture] = useState(1);
  const [galleryId, setGalleryId] = useState(null);

  const prevSlide = () => {
    setCurrentPicture((oldPicture) => {
      const result =
        (oldPicture - 1 + galleryImages.length) % galleryImages.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPicture((oldPicture) => {
      const result = (oldPicture + 1) % galleryImages.length;
      return result;
    });
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    // Clear previous interval if galleryId is not null
    if (galleryId) {
      clearInterval(galleryId);
    }

    // Set up a new interval only if there are images in the gallery
    if (galleryImages.length > 0) {
      const newGalleryId = setInterval(() => {
        nextSlide();
      }, 2000);

      setGalleryId(newGalleryId);

      // Clear the interval when the component unmounts or when galleryImages changes
      return () => {
        clearInterval(newGalleryId);
      };
    }
  }, [currentPicture]); // Add currentPicture to the dependency array

  /* eslint-disable react-hooks/exhaustive-deps */

  return (
    <section className="section" id="gallery">
      <Title title="Gallery" />
      {/* { {people.map((person) => {
        const { id, image } = person;
        return (
          <article className="slide" key={id}>
            <img src={image} alt="bath" className="gal-img" />
          </article>
        );}
      })} */}
      <div className="slider-container">
        {galleryImages.map((image, index) => (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentPicture)}%)`,
              opacity: index === currentPicture ? 1 : 0,
              visibility: index === currentPicture ? "visible" : "hidden",
            }}
            key={index}
          >
            <img
              src={image}
              alt={`Gallery Slide ${index + 1}`}
              className="gal-img"
            />
          </article>
        ))}

        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
