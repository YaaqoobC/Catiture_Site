// src/Pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Import your homepage-specific styles
import Slideshow from './SlideshowHome.js';

import cat from './PicturesHome/cat.png';


function HomePage() {
  return (
    <div className="homepage">
      <section className="about-me">
        <h2 className="section-title">lsdkjfsdlkjfsdlkjfAbout Me</h2>
        <p className="section-content">
          Hello, I'm Yaaqoob Choulli, the passionate creator and proud owner of Catiture. At just 15 years old, I've embarked on an exciting journey to provide cat enthusiasts like you with exceptional cat furniture. My passion for craftsmanship was honed during my three years of Junior High construction, and now, I'm channeling that expertise into crafting high-quality, premium cat furniture at prices that won't break the bank.
        </p>
        <p className="section-content">
          My mission at Catiture is twofold: first, to showcase the finite skills I've acquired over the years, and second, to continually refine and expand upon them. Join me in this feline-inspired adventure, and together, we'll elevate your cat's comfort and playtime to new heights.
        </p>
      </section>

      <section className="slideshow">
        <h2 className="section-title">Pervious Projects</h2>
        <Slideshow />
      </section>

      <h2 className="section-title">Our Backstory</h2>
      <section className="backstory">
        <div className="flex-2-boxes">
          <div className="cat-image">
            <img src={cat} alt="Cat" />
          </div>
        
          <p className="section-content">
            Not too long ago, I welcomed two spirited feline companions into my life, Skylark and Starling. 
            These two curious souls brought joy and mischief, as they often do, including a penchant for 
            climbing and scratching. Determined to provide them with the perfect cat tree, I took a chance 
            and purchased a costly one from a well-known online retailer.
          </p>
        </div>
        
      </section>

      <section>
        <p className="section-content">
          To my dismay, within a mere two weeks, the expensive cat tree lay in tatters. 
          This experience prompted a pivotal realization: I could create something better—something 
          strong, durable, and tailor-made for my beloved cats. Armed with my tools and newfound determination, I set out on a mission to craft the ultimate cat tree. The result? A masterpiece that's not only built to last but sets the standard for cat furniture excellence.
        </p>
        <p className="section-content">
          My journey from cat owner to cat furniture artisan has been one of inspiration and dedication. I'm proud to share this story with you, and I invite you to explore the world of Catiture, where quality, craftsmanship, and feline delight unite.
        </p>
      </section>
        

    </div>
  );
}

export default HomePage;