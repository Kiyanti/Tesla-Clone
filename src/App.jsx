import Header from "./components/Header";
import Home from "./components/Home";
import { useRef, useEffect } from "react";

function App() {
  const carsRef = useRef({});

  useEffect(() => {
    console.log(carsRef.current);
  }, [carsRef]);

  const handleScrollToCar = (id, e) => {
    if (carsRef.current[id]) {
      e.preventDefault();
      carsRef.current[id].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollHandler={handleScrollToCar} />
      <Home ref={carsRef} />
    </div>
  );
}

export default App;
