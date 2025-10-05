import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import "./SearchBar.css";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="search-bar">
      <HiLocationMarker className="location-icon" />

    
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search properties by title, city, or country..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />


          <button
            type="button"
            className="clear-btn"
            onClick={() => setFilter("")}
          >
            <MdClose size={18} />
          </button>
        
      </div>



      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
