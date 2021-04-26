import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container search-field">
        <form className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            autoComplete="off"
            autofocus=""
          />
          <button class="btn btn-outline-secondary" type="submit">
            <i class="fas fa-search" aria-hidden="true"></i>
          </button>
          <button className="btn btn-outline-secondary" type="button">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
