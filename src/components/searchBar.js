import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      const newFilter = data.filter((value) => {
          return value.label.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
          setFilteredData([])
      } else {
        setFilteredData(newFilter)
      }
    }

    return (
        <div className="search col-12">
          <div className="searchInputs">
              <input type="text" placeholder={placeholder} onChange={handleFilter}/>
              <div className="searchIcon">
                  <SearchIcon />
              </div>
          </div>
        </div>
    );
}

export default SearchBar;