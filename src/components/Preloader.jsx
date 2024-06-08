import React from "react";
import animation from "../public/Animation - 1717423243133.json";
import Lottie from "react-lottie";

const Preloader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensure the overlay is above other elements
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
  };

  return (
    <section style={overlayStyle}>
      <main>
        <Lottie options={defaultOptions} height={500} width={500} />
      </main>
    </section>
  );
};

export default Preloader;
