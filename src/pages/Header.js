import React from "react";

const Index = () => {
  const hamburg = () => {
    console.log("Hamburger menu clicked");
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1500">
          Life <span>Connect</span>
        </div>
        <div className="links">
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <a href="#">Home</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <a href="#">About</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <a href="#">Donors</a>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <a href="#">Patient</a>
          </div>
        </div>
        <i className="fa-solid fa-bars hamburg" onClick={hamburg}></i>
      </div>
    </nav>
  );
};

export default Index;
