import React from "react";
import "../index.css";

const Location = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Find us</h1>
      <div className="row justify-content-between gap-3">
        <div className="col-md-4 pb-5">
          <h3>Lorem ipsum Lithuania</h3>
          <p>
            Lorem st. 3<br />
            Vilnius
            <br />
            Lithuania
          </p>
        </div>
        <div className="col-md-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9224.122398019957!2d25.273290698120693!3d54.69148916821228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9405228151ef%3A0x69c1553c11755694!2s%C5%BDaliasis%20tiltas!5e0!3m2!1slt!2slt!4v1657539487280!5m2!1slt!2slt"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr />
      <div className="row justify-content-between gap-3">
        <div className="col-md-4">
          <h3>Lorem ipsum UK</h3>
          <p>
            Lorem st. 3<br />
            London
            <br />
            UK
          </p>
        </div>
        <div className="col-md-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19866.32771973244!2d-0.09922185677445382!3d51.507877704475085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035159bb13c5%3A0xa61e28267c3563ac!2sLondon%20Bridge!5e0!3m2!1slt!2slt!4v1657539591160!5m2!1slt!2slt"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr />
      <div className="row justify-content-between gap-3">
        <div className="col-md-4">
          <h3>Lorem ipsum USA</h3>
          <p>
            Lorem st. 3<br />
            Washington, D.C.
            <br />
            USA
          </p>
        </div>
        <div className="col-md-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12422.407068141765!2d-77.06323571356323!3d38.88735216121378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7000e33bcab%3A0x8536858d1405c17e!2sArlington%20Memorial%20Bridge!5e0!3m2!1slt!2slt!4v1657539652128!5m2!1slt!2slt"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
