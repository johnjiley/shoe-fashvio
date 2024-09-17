import React from 'react';
import './About.css'; // Import your CSS file
import shoe14 from '../../assets/shoe14.jpg'; // Correct path to the image

const About = () => {
  return (
    <div>
      {/* Main container for the form */}
      <div className="main-container">
        {/* Apply the background image to the main-sub div */}
        <div className="main-sub" style={{
          backgroundImage: `url(${shoe14})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <div className="Contact">
            {/* Add content for the contact section here */}
          </div>
          <div className="about-container">
            <div className="about-content">
              <h1 className="about-title">About Us</h1>
              <p className="about-paragraph">
                Welcome to our website! We are passionate about delivering the best products to our customers.
                Our team is dedicated to creating high-quality and innovative solutions that meet your needs.
              </p>
              <p className="about-paragraph">
                With years of experience in the industry, we strive to exceed expectations by providing
                exceptional customer service and value. Our mission is to continuously improve and adapt to the ever-changing market.
              </p>
              <p className="about-paragraph">
                Join us on our journey, and together, we can make a positive impact in the world of e-commerce. We believe in building long-lasting relationships with our clients and growing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
