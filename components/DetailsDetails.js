import React from "react";

function DetailsDetails({ setIsGameOn }) {
  return (
    <div>
      <div className="px-6 mt-6">
        <h3 className="uppercase text-xs font-bold text-gray-400 mb-1">Description</h3>
        <p>
          The washing machine – sometimes combined with dryer - is the home appliance with perhaps the longest
          development history, with commercial models introduced as far back as the mid 1850’s! Today they are required
          to clean more effectively while consuming less energy, water and detergent, and operate at the lowest possible
          noise levels while ensuring greater safety. They are also increasingly required to provide connectivity to
          enable home automation and control through the cloud and mobile apps, and to make complex functionality easy
          to use via a user-friendly interface.
        </p>
      </div>
      <div className="px-6 mt-10">
        <img src="/washing-machine.svg" alt="" />
      </div>
      <div className="flex justify-center my-12">
        <button onClick={() => setIsGameOn(true)} className="uppercase rounded-full bg-[#085ECA] py-2 px-5 text-white">
          test your knowledge
        </button>
      </div>
    </div>
  );
}

export default DetailsDetails;
