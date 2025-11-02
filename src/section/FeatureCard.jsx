import React from "react";
import { abilities } from "../constants";

const FeatureCard = () => {
  return (
    <>
      <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
          {abilities.map((data) => (
            <div
              key={data.title}
              className="card-border rounded-xl p-8  flex flex-col gap-4"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={data.imgPath} alt={data.title} />
              </div>

              <h3 className="text-white text-2xl font-semibold mt-2">
                {data.title}
              </h3>
              <p className="text-white-50 text-lg">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
