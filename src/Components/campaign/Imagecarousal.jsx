import React, {useState} from 'react';
import { MdVerified } from "react-icons/md";
import { MdReceiptLong } from "react-icons/md";
import './Imagecarousal.css';

const images = [
  "https://images.unsplash.com/photo-1758346974564-07a164871e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVtcGxlJTIwZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1164092444/photo/pilgrim-visit-at-golden-temple-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=AzpEyspss4hjbUrPCmdOTWdQTkgu_3Bg6vNwgTJO-ZI=",
  "https://images.unsplash.com/photo-1560960138-c463603a0e57?w=700",
  "https://images.unsplash.com/photo-1777222219334-acf1885f245c?w=700"
];

const ImageCarousal = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='campaign-container'>
      
      {/* Campaign Title */}
      <h1>Dharmic seva for elders</h1>

      {/* Verified + Tax Badges */}
      <div className='second-heading'>
        <div className='verified'>
          <MdVerified color="#e65c00" />
          <p>Verified Campaign</p>
        </div>

        <div className='Taxbenefit'>
          <MdReceiptLong color="#e65c00" />
          <p>80G Tax Benefit</p>
        </div>
      </div>

      {/* Main Image with Arrows and Pagination */}
      <div className='main-image'>
        
        {/* Left Arrow */}
        <button className='arrow left' onClick={goToPrev}>‹</button>

        {/* Main Display Image */}
        <img 
          src={images[currentIndex]} alt="content" className="display-img"
        />

        {/* Right Arrow */}
        <button className='arrow right' onClick={goToNext}>›</button>

        {/* Pagination - bottom right (1/2) */}
        <span className='pagination'>{currentIndex + 1} / {images.length}</span>

      </div>

      {/* Thumbnail Images - neeche wali row */}
      <div className='carousel-thumbnails'>
        <img 
          src="https://media.istockphoto.com/id/1164092444/photo/pilgrim-visit-at-golden-temple-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=AzpEyspss4hjbUrPCmdOTWdQTkgu_3Bg6vNwgTJO-ZI=" 
          alt="thumbnail 1" className="thumbnail-img"
        />
        <img 
          src="https://images.unsplash.com/photo-1560960138-c463603a0e57?w=700" 
          alt="thumbnail 2" className="thumbnail-img"
        />
        <img 
          src="https://images.unsplash.com/photo-1777222219334-acf1885f245c?w=700" 
          alt="thumbnail 3" className="thumbnail-img"
        />
      </div>


    </div>
  );
};

export default ImageCarousal;