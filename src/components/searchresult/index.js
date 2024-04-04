import React from "react";
import styles from './index.module.css';
import Tracklist from "../tracklist";

function SearchResult({searchResults,onAdd}){

    return (
        <div className={styles.SearchResults}>
            <h2 className={styles.SearchResultsName}>Results</h2>
            <Tracklist 
            tracks = {searchResults}
            isInPlaylist={false}
            onAdd={onAdd}
            />
        </div>
    )
}

export default SearchResult;