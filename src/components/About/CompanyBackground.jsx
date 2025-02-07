import React from "react";
import FarmPhoto from "../../assets/about/farm-photo.png"
const CompanyBackground = () => {
  return (
    <div>
      <div className="who-we-are mt-10  w-11/12 mx-auto md:flex gap-2 p-2">
        <div className="who-we-are-titles">
          <h1 className="text-3xl font-bold text-green-900">Company Background</h1>
          <p className="statement mt-3">
            Founded in 2018, Mara Lifesciences addresses key gaps in
            biopesticide production, focusing on continuous product improvement,
            consistent quality, and leveraging advanced production technology
            and scientific expertise.
          </p>
        </div>
        <img className="mt-3 md:w-1/2 rounded-xl" src={FarmPhoto} />
      </div>
    </div>
  );
};

export default CompanyBackground;
