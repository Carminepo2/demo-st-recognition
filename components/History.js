import React from "react";

function History() {
  return (
    <section>
      <div className="flex justify-between mt-16 mb-5">
        <h2 className="px-6 font-bold text-3xl">History</h2>
        <div className="px-6 text-base relative">
          <div className="absolute -left-2 text-blue-600 bottom-0">clear</div>
        </div>
      </div>
      <hr />
      <div className="flow-root">
        <Data1 />
        <hr />
        <Data2 />
        <hr />
        <Data3 />
      </div>
    </section>
  );
}

export default History;

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
                  <p className="text-sm  text-gray-900">Washing Machine</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">11:30</time>
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
                  <p className="text-sm  text-gray-900">Fridge</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">11:26</time>
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
      <h3 className="text-blue-400 text-sm mb-3">2 hours ago</h3>
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
                  <p className="text-sm  text-gray-900">Dryer</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">20:30</time>
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
                  <p className="text-sm  text-gray-900">Washing Machine</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">20:28</time>
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
                  <p className="text-sm  text-gray-900">Electric Toothbrush</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">20:27</time>
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
                  <p className="text-sm  text-gray-900">Fridge</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">20:27</time>
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
      <h3 className="text-blue-400 text-sm mb-3">7 days ago</h3>
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
                  <p className="text-sm  text-gray-900">Microwave Oven</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">10:42</time>
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
                  <p className="text-sm  text-gray-900">Coffee Machine</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">10:40</time>
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
                  <p className="text-sm  text-gray-900">Washing Machine</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">10:40</time>
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
                  <p className="text-sm  text-gray-900">Lawn Mower</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">10:40</time>
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
                  <p className="text-sm  text-gray-900">Fridge</p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                  <time dateTime="2020-09-20">11:26</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
