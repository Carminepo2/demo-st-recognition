import React, { useState } from "react";

function Feedback() {
  const [section, setSection] = useState("History");
  return (
    <div className="w-screen">
      <div className="flex justify-center mt-5">
        <img width="200px" height="200px" src="/percentuale.png" />
      </div>
      <h3 className="text-center text-3xl font-bold text-gray-900">Today's score</h3>
      <div className="grid grid-cols-2 text-center px-6 mt-12">
        <div
          onClick={() => setSection("History")}
          className={`border-2 rounded-l-md border-[#307EE6] relative left-0.5 ${
            section === "History" ? "text-white bg-[#307EE6]" : "text-gray-900 "
          }`}
        >
          History
        </div>
        <div
          onClick={() => setSection("Feedback")}
          className={`border-2 rounded-r-md border-[#307EE6] relative right-0.5 ${
            section === "Feedback" ? "text-white bg-[#307EE6]" : "text-gray-900 "
          }`}
        >
          Feedback
        </div>
      </div>
      {section === "History" ? (
        <div>
          <div className="flow-root">
            <Data1 />
            <hr />
            <Data2 />
            <hr />
            <Data3 />
          </div>
        </div>
      ) : (
        <div className="px-6">
          <h3 className="text-xl text-center font-bold text-gray-900 mt-6">
            You've got <strong className="text-red-600">7</strong> wrong answers
          </h3>
          <div className="mt-6">
            <h4 className="uppercase text-xs font-bold text-gray-400 mb-1">Task</h4>
            <p>
              <strong>Select the correct Part Number for the Washing Machine</strong>
            </p>
          </div>
          <div className="my-6">
            <h4 className="uppercase text-xs font-bold text-gray-400 mb-1">Answers</h4>
            <ul className="space-y-5">
              <li className="bg-red-50 p-2">
                1. A3G4250D - A6985F - A6986 - HTS221 - SPC5-STUDIO <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>A6986</strong>
                  <br />
                  Risposta Esatta: <strong>HTS221</strong>
                </div>
              </li>
              <li className="bg-red-50 p-2">
                1. A3G4250D - A6985F - A6986 - HTS221 - SPC5-STUDIO <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>A6986</strong>
                  <br />
                  Risposta Esatta: <strong>HTS221</strong>
                </div>
              </li>
              <li className="bg-red-50 p-2">
                2. ESDCAN05-2BWY - L5965 - IIS2DH - ESDCAN03-2BWY - L9616 <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>L5965</strong>
                  <br />
                  Risposta Esatta: <strong>IIS2DH</strong>
                </div>
              </li>
              <li className="bg-green-50 p-2">
                3. IIS2MDC - ESDCAN01-2BLY - ST33G1M0A - SPC5-UDESTK-SW - AIS328DQ <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>IIS2MDC</strong>
                  <br />
                  Risposta Esatta: <strong>IIS2MDC</strong>
                </div>
              </li>
              <li className="bg-red-50 p-2">
                4. AndroidHAL-IIO - EVAL-L5963Q - EVB-T3 - LinuxDriverIIO - L6388E <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>LinuxDriverIIO</strong>
                  <br />
                  Risposta Esatta: <strong>L6388E</strong>
                </div>
              </li>
              <li className="bg-red-50 p-2">
                5. SEL-SPC5 - SPC5-STUDIO - A6986H - L6399 - ESDCAN05-2BWY <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>A6986H</strong>
                  <br />
                  Risposta Esatta: <strong>L6399</strong>
                </div>
              </li>
              <li className="bg-green-50 p-2">
                6. EMIF02-02OABRY - ST33G1M0A - AndroidHALInput - EVAL-L5963Q - LPS33HW <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>LPS33HW</strong>
                  <br />
                  Risposta Esatta: <strong>LPS33HW</strong>
                </div>
              </li>
              <li className="bg-red-50 p-2">
                7. LinuxDriverIIO - EVB-T3 - AIS2IH - A6985F - EMIF02-02OABRY <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>EVB-T3</strong>
                  <br />
                  Risposta Esatta: <strong>LinuxDriverIIO</strong>
                </div>
              </li>
              <li className="bg-green-50 p-2">
                8. L5965 - ESDCAN01-2BLY - SL-DPSLLCK1 - ASM330LHH - ST33G1M0A <br />
                <div className="ml-3 text-sm my-1">
                  Hai scelto: <strong>SL-DPSLLCK1</strong>
                  <br />
                  Risposta Esatta: <strong>SL-DPSLLCK1</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;

function Data1() {
  return (
    <div className="flow-root mt-6 px-6">
      <h3 className="text-blue-400 text-sm mb-3">today</h3>
      <ul className="">
        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-2 -ml-px h-full w-0.5 bg-[#085ECA]" aria-hidden="true"></span>
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center justify-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm  text-gray-900">
                    Washing Machine test - <strong>30%</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="relative pb-8">
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm  text-gray-900">
                    Washing Machine test - <strong>20%</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Data2() {
  return (
    <div className="flow-root mt-6  px-6">
      <h3 className="text-blue-400 text-sm mb-3">2 days ago</h3>
      <ul className="">
        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-2 -ml-px h-full w-0.5 bg-[#085ECA]" aria-hidden="true"></span>
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center justify-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm  text-gray-900">
                    Dish washer test - <strong>50%</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="relative pb-8">
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm  text-gray-900">
                    Dryier - <strong>40%</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Data3() {
  return (
    <div className="flow-root mt-6  px-6">
      <h3 className="text-blue-400 text-sm mb-3">5 days ago</h3>
      <ul className="">
        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-2 -ml-px h-full w-0.5 bg-[#085ECA]" aria-hidden="true"></span>
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center justify-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm  text-gray-900">
                    Dish washer - <strong>50%</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="relative pb-8">
            <span className="absolute top-4 left-2 -ml-px h-full w-0.5 bg-[#085ECA]" aria-hidden="true"></span>
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center justify-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <div>
                    <p className="text-sm  text-gray-900">
                      Dryier - <strong>40%</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="relative pb-8">
            <div className="relative flex space-x-3">
              <div>
                <span className="h-4 w-4 rounded-full bg-[#085ECA] flex items-center"></span>
              </div>
              <div className="relative bottom-2 min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-900">
                    Refrigerator - <strong>70%</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
