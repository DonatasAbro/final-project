import React from "react";
import "../index.css";

const FAQ = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Frequently asked quetions</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {/* Item */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed top-bottom-style"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Lorem ipsum dolor sit amet?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              vero officia iusto, quasi blanditiis repudiandae debitis adipisci
              rem reiciendis? Cupiditate.
            </div>
          </div>
        </div>
        {/* Item */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed top-bottom-style"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Lorem ipsum dolor sit amet?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              vero officia iusto, quasi blanditiis repudiandae debitis adipisci
              rem reiciendis? Cupiditate.
            </div>
          </div>
        </div>
        {/* Item */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed top-bottom-style"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Lorem ipsum dolor sit amet?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              vero officia iusto, quasi blanditiis repudiandae debitis adipisci
              rem reiciendis? Cupiditate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
