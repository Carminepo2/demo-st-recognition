import React from "react";
import { MdHistory, MdSettings } from "react-icons/md";

function MainPage({ setHistory }) {
  return (
    <section>
      <h2 className="uppercase font-bold text-center mt-6 text-2xl text-gray-900">Point it at a product</h2>
      <p className="text-sm text-center text-gray-700">to scan its components</p>
      <div className="flex justify-center mt-6">
        <img src="/st-logo.svg" width="200" height="80" />
      </div>
      <div className="grid grid-cols-3">
        <div></div>
        <div className="flex justify-center mt-16">
          <div
            onClick={() => setHistory(true)}
            className="border border-gray-500 rounded-full w-28 py-2 pl-1 pr-2 flex justify-around text-gray-500"
          >
            <MdHistory size={25} /> <span className="-ml-2">History</span>
          </div>
        </div>
        <div className="self-end py-2 justify-self-center text-gray-500">
          <MdSettings size={25} />
        </div>
      </div>
    </section>
  );
}

export default MainPage;
