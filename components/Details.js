import React, { useState } from "react";
import { AiOutlineInfoCircle, AiOutlineLeft } from "react-icons/ai";
import DetailsDetails from "./DetailsDetails";
import Game from "./Game";

function Details({ showDetails, setShowDetails }) {
  const [isGameOn, setIsGameOn] = useState(false);
  return (
    <section
      className={`absolute top-0 transform transition-transform duration-500 bg-white z-50 ${
        showDetails ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" mt-12 mb-5">
        <div
          className="pl-6 text-xl text-blue-600 -left-2 relative bottom-8 flex items-center"
          onClick={() => setShowDetails(false)}
        >
          <AiOutlineLeft size={20} /> Back
        </div>
        <div className="flex justify-between">
          <h2 className="px-6 font-bold text-3xl">{isGameOn ? "Game" : "Washing Machine"}</h2>
          <div className="px-6 text-base relative">
            <a
              target="_blank"
              href="https://www.st.com/content/st_com/en/applications/industrial/home-and-professional-appliances/large-appliances/washing-machines.html"
            >
              <div className="absolute -left-2 text-blue-600 bottom-0">
                <AiOutlineInfoCircle size={28} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr />
      {isGameOn ? <Game setIsGameOn={setIsGameOn} /> : <DetailsDetails setIsGameOn={setIsGameOn} />}
    </section>
  );
}

export default Details;
