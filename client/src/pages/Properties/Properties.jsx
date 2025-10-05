import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./Properties.css";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");

  // --- Error state ---
  if (isError) {
    return (
      <div className="wrapper flexCenter">
        <span>Error while fetching data</span>
      </div>
    );
  }

  // --- Loading state ---
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader color="#4066ff" aria-label="puff-loading" />
      </div>
    );
  }

  // --- Empty data state ---
  if (!data || data.length === 0) {
    return (
      <div className="wrapper flexCenter">
        <span>No properties found.</span>
      </div>
    );
  }

  // --- Filtering ---
  const searchQuery = filter.toLowerCase();
  const filteredData = data.filter(
    (property) =>
      property.title?.toLowerCase().includes(searchQuery) ||
      property.city?.toLowerCase().includes(searchQuery) ||
      property.country?.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        {/* ✅ Pass setFilter directly */}
        <SearchBar filter={filter} setFilter={setFilter} />
        

        <div className="paddings flexCenter properties">
          {filteredData.map((card) => (
            <PropertyCard card={card} key={card.id || card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
