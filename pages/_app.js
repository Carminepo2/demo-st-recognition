import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
