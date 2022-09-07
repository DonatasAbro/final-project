import React from "react";
import "../index.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
import about4 from "../images/about4.jpg";
import about5 from "../images/about5.jpg";

const About = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4">About us</h1>
      <OwlCarousel className="owl-theme" items="1" autoplay dots={false} loop>
        <div className="item">
          <img src={about1} />
        </div>
        <div className="item">
          <img src={about2} />
        </div>
        <div className="item">
          <img src={about3} />
        </div>
        <div className="item">
          <img src={about4} />
        </div>
        <div className="item">
          <img src={about5} />
        </div>
      </OwlCarousel>
      <div className="my-5">
        <p>
          <b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nulla.
          </b>
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          tenetur velit molestias vero! Dicta, ipsa velit. Illo facere nulla in
          perspiciatis perferendis architecto, maiores inventore deleniti
          consequatur ullam modi dolor excepturi voluptas laboriosam error.
          Magni nisi totam eveniet dolor libero, quod, doloremque quisquam
          magnam voluptatem sint reiciendis. Id, eius enim?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          tenetur velit molestias vero! Dicta, ipsa velit. Illo facere nulla in
          perspiciatis perferendis architecto, maiores inventore deleniti
          consequatur ullam modi dolor excepturi voluptas laboriosam error.
          Magni nisi totam eveniet dolor libero, quod, doloremque quisquam
          magnam voluptatem sint reiciendis. Id, eius enim?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          tenetur velit molestias vero! Dicta, ipsa velit. Illo facere nulla in
          perspiciatis perferendis architecto, maiores inventore deleniti
          consequatur ullam modi dolor excepturi voluptas laboriosam error.
          Magni nisi totam eveniet dolor libero, quod, doloremque quisquam
          magnam voluptatem sint reiciendis. Id, eius enim?
        </p>
        <hr id="about-eop-line" />
        <p>
          Lorem, ipsum.
          <br />
          Lorem
        </p>
      </div>
    </div>
  );
};

export default About;
