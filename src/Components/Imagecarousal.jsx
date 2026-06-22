import React from 'react';
import { MdVerified } from "react-icons/md";
import { MdReceiptLong } from "react-icons/md";

const ImageCarousel = () => {

  return (
    <div className='campaign-container'>
      
      {/* Campaign Title */}
      <h1>DharmicSeva for elders</h1>

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
        <button className='arrow left'>‹</button>

        {/* Main Display Image */}
        <img 
          src="https://images.unsplash.com/photo-1758549781879-82d764bddc37?w=500" 
          alt="temple" 
        />

        {/* Right Arrow */}
        <button className='arrow right'>›</button>

        {/* Pagination - bottom right (1/2) */}
        <span className='pagination'>1 / 2</span>

      </div>

      {/* Thumbnail Images - neeche wali row */}
      <div className='carousel-thumbnails'>
        <img 
          src="https://media.istockphoto.com/id/1164092444/photo/pilgrim-visit-at-golden-temple-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=AzpEyspss4hjbUrPCmdOTWdQTkgu_3Bg6vNwgTJO-ZI=" 
          alt="thumbnail 1" 
        />
        <img 
          src="https://images.unsplash.com/photo-1560960138-c463603a0e57?w=700" 
          alt="thumbnail 2" 
        />
        <img 
          src="https://images.unsplash.com/photo-1777222219334-acf1885f245c?w=700" 
          alt="thumbnail 3" 
        />
      </div>

    </div>
  );
};

export default ImageCarousel;