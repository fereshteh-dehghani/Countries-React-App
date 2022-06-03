import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Search =() => {
    return(
        <div className="search_input">
            <FontAwesomeIcon icon={faSearch}  />
            <input type='text' placeholder="Seach by Country Name"/>

        </div>
    )

}
const Select = () =>{
    return(
        <div className="select_region">
            <select name="continet" id="continet">
            <option value="All"defaultCheckede >All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Eroupe">Eroupe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}
 const SearchAndSelect = () => {
     return(
      <div className="inputs">
             <Search/>
             <Select/>
      </div>
     )
 }
export default SearchAndSelect;