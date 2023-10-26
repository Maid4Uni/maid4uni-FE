import React, { useState } from "react";

const FooterAmin = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ position: "absolute", bottom: "0", zIndex: "10" }}
      >
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="text-center  mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#"></a>EduLuxe, All
                Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterAmin;
