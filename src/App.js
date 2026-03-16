import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Indulekha from "./pages/Indulekha";
import Tech from "./pages/Tech";
import Home1 from "./pages/Home1";
import Lenis from "lenis";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   // console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }
  // requestAnimationFrame(raf);


  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust this value for smoothness
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (e) => {
      // console.log('Scroll event:', e);
    });

    const handleRAF = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleRAF);
    };

    requestAnimationFrame(handleRAF);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/indulekha" element={<Indulekha />} />
            <Route path="/tech" element={<Tech />} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
}

export default App;
