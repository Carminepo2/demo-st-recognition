import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Details from "../components/Details";
import Modal from "../components/Modal";
import getRandomArbitrary from "../utils/arbitraryRandomFloat";
import getRandomIntInclusive from "../utils/randomInclusive";

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [squarePosition, setSquarePosition] = useState(null);
  const firstRender = useRef(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  function handleSuccess(stream) {
    window.stream = stream;
    videoRef.current.srcObject = stream;
  }

  function handleError(error) {
    console.log("navigator.MediaDevices.getUserMedia error: ", error.message, error.name);
  }

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { facingMode: { exact: "environment" } },
      })
      .then(handleSuccess)
      .catch(handleError);

    let context = canvasRef.current.getContext("2d");

    const w = window.innerWidth;
    const h = window.innerHeight;

    canvasRef.current.height = h;
    canvasRef.current.width = w;

    videoRef.current.addEventListener(
      "play",
      function () {
        draw(this, context, w, h);
      },
      false
    );
  }, []);

  useEffect(() => {
    const w = window.innerWidth / 2 - 90;
    const h = window.innerHeight / 2 - 90;
    const value = getRandomArbitrary(0.75, 1.01).toString().substring(0, 4);
    const randomPosition = {
      x: getRandomIntInclusive(w - 20, w + 20),
      y: getRandomIntInclusive(h - 20, h + 20),
      value,
    };

    const nextTime = firstRender.current ? 5000 : getRandomIntInclusive(800, 1300);
    firstRender.current = false;

    setTimeout(() => setSquarePosition(randomPosition), nextTime);
  }, [squarePosition]);

  function draw(v, c, w, h) {
    if (v.paused || v.ended) return false;
    c.drawImage(v, 0, 0, w, h);
    setTimeout(draw, 100, v, c, w, h);
  }

  return (
    <>
      <main className={`h-screen w-screen overflow-hidden ${!showDetails && "fixed"}`}>
        <div
          className={`transform transition-transform duration-500 ${
            !showDetails ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <canvas ref={canvasRef} className="absolute inset-0"></canvas>
          <video playsInline autoPlay ref={videoRef} className="hidden" />
          {squarePosition && (
            <div className="relative">
              <motion.div
                onClick={() => setShowDetails(true)}
                className="absolute w-48 h-48 border-4 border-[#085ECA]"
                style={{ y: squarePosition.y, x: squarePosition.x }}
              >
                <div className="relative bottom-6 flex justify-between text-[#085ECA] font-bold">
                  <div>TAP</div>
                  <div>{squarePosition.value}</div>
                </div>
                <div className="relative w-h/2 border-r-4 h-4 top-[164px] right-[90px] border-[#085ECA]"></div>
                <div className="relative top-[162px] left-[14px] text-[#085ECA] font-bold">WASHING MACHINE</div>
              </motion.div>
            </div>
          )}
          <Modal />
        </div>
        <Details showDetails={showDetails} setShowDetails={setShowDetails} />
      </main>
    </>
  );
}
