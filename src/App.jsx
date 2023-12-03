import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import TopSlide from "./Components/TopSlide";
import GetSarted from "./Components/GetSarted";
import "./App.css";
import TakeQuiz from "./Components/TakeQuiz";
import TrackChart from "./Components/TrackChart";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <TopSlide></TopSlide>
      <GetSarted></GetSarted>
      <TakeQuiz></TakeQuiz>
      <TrackChart></TrackChart>
      <Footer></Footer>
    </>
  );
}

export default App;
