import React from 'react';
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Welcome to Edusity, your gateway to a transformative educational experience. Our institution is dedicated to fostering a dynamic learning environment where students can explore their passions, expand their horizons, and prepare for a lifetime of success. With world-class faculty, cutting-edge facilities, and a commitment to excellence, Edusity is where dreams take flight and futures are forged</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  );
}

export default Hero;
