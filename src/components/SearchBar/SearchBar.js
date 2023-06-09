import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import search from "../../utils/YelpApi";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSortingOption, setSelectedSortingOption] = useState("");

  //Handlers
  const handleSortingOptionChange = (sortByOption) => {
    setSelectedSortingOption(sortByOption);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    handleSearch(searchTerm, location, selectedSortingOption); // Pass the desired search parameters
  };
  

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      const isActive = selectedSortingOption === sortByOptionValue;
      return (
        <li
          onClick={() => handleSortingOptionChange(sortByOptionValue)}
          key={sortByOptionValue}
          className={isActive ? styles.active : ""}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          placeholder="Search Businesses"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a href="#" onClick={handleSubmit}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
