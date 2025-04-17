import React from 'react';
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">Saving Lives, One Drop at a Time</p>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a dedicated team of developers, healthcare professionals, and volunteers with a shared mission —
          to make blood donation simple, fast, and impactful. Our platform helps connect donors with patients and
          medical institutions when it matters most.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Connect blood donors with recipients in real time.</li>
          <li>Promote and encourage voluntary blood donation.</li>
          <li>Support hospitals and blood banks with smart tools.</li>
          <li>Send urgent alerts to registered donors during emergencies.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why It Matters</h2>
        <p>
          Every year, countless lives are saved through timely blood donations. Our platform exists to ensure no one
          has to suffer due to a lack of available blood. By creating a community of committed donors, we can all play
          a part in saving lives.
        </p>
      </div>
    </div>
  );
};

export default About;
