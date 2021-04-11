import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainPage from "./MainPage";
import History from "./History";

function Modal() {
  const [windowSize, setWindowSize] = useState({ height: undefined });
  const [history, setHistory] = useState(false);
  const firstRenderRef = useRef(-1);

  function handleDragEnd(event, info) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;

    if (offset > 300 || velocity > 200) {
      setHistory(false);
    }
  }

  useEffect(() => {
    setWindowSize(!history ? window.innerHeight - 350 : 0);
    firstRenderRef.current++;
  }, [history]);

  return (
    <div>
      <motion.div
        animate={{
          y: windowSize,
          transition: { duration: firstRenderRef.current <= 0 ? 0 : 0.6 },
        }}
        dragConstraints={{ top: !history ? windowSize : 0, bottom: !history ? windowSize + 310 : -windowSize }}
        onDragEnd={handleDragEnd}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        drag="y"
        className="w-full backdrop-filter backdrop-blur-[100px] bg-opacity-80 h-screen bg-white rounded-t-3xl pt-1 relative z-20"
      >
        <div className="w-16 bg-gray-600 m-auto mt-1 rounded-3xl h-1"></div>
        {history ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
            <History />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainPage setHistory={setHistory} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Modal;
