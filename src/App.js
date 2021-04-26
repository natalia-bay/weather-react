import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div class="container city-box">
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}
