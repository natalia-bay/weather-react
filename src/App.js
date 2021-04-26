import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}
