import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <section className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"></section>
    </main>
  );
};

export default App;
