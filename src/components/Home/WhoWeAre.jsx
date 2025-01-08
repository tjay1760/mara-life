import React from "react";
import LabPhoto from "../../assets/who-we-are/an image of two african scientists in a lab-min.jpg"
const WhoWeAre = () => {
  return (
    <>
      <div className="who-we-are mt-10 border border-red-500 w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-green-900">Who we are</h1>
        <p className="statement mt-3">
          Mara Lifesciences Ltd is a biopesticides and biofertilizers production
          company based in Nairobi, Kenya. We specialize in developing
          sustainable agricultural products aimed at improving crop protection
          and soil health through eco-friendly solutions. Our goal is to support
          farmers with effective, environmentally conscious products while
          offering technical support and training.
        </p>
        <img className ="mt-3" src={LabPhoto}/>
      </div>
    </>
  );
};

export default WhoWeAre;
