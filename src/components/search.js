import React from 'react';
import {MdSearch} from 'react-icons/md';
const Search=({searchFun})=>{
    return (
        <div className="searchbar">
           <MdSearch className="searchicon" size="1.5rem"/>
           <input 
           className="input" type="text" placeholder="Search here......:)"
           onChange={(event)=>searchFun(event.target.value)}
           ></input>
        </div>
    )
}

export default Search;