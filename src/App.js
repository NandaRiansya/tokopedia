import React from "react";
import logo from "./images/gambar.png";
import "./App.css";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Tokopedia
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="gambar">
        <img
          src={require("./images/gambar.png")}
          alt="Credit to Joshua Earle on Unsplash"
        />
      </div>
    </div>
    <div class="col-sm text-center">
      nanda 
    </div>
  </div>
</div>
      
    </div>
  );
}

export default App;
