import React from "react";
import { useState } from "react";
import styles from './index.module.css'

function SearchBar({onClick}){
    
    const [searchQuery, setSearchQuery] = useState ('');

    const handleInputChange = (event) =>{
        setSearchQuery(event.target.value)

    }

    const handleSearch = () =>{
        onClick(searchQuery);
        setSearchQuery('')
    }


    return (
        <div className={styles.SearchBar}>
            <input  className={styles.SearchBarInput} type="text" placeholder="Enter a song title..." value={searchQuery} onChange = {handleInputChange} />
            <button className= {styles.SearchBarButton} onClick={handleSearch}>Search</button>
        </div>
    )

}

export default SearchBar;