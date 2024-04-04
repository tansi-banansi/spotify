import React from "react";
import styles from './index.module.css'
import Tracklist from "../tracklist";
 
function Playlist({onSubmit,playlist, onRemove}){
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        onSubmit(event); // Call the onSubmit function provided by the parent component
      };

    return (
        <div className={styles.Playlist}>

            <form onSubmit={handleSubmit}> 
                <input 
                    className={styles.InputPlaylist}
                    name="name"
                    placeholder="Playlist name"
                    type="text"
                />

                <Tracklist tracks={playlist} onRemove={onRemove} isInPlaylist={true}/>

                <button className={styles.ButtonPlaylist} type="submit">Save To Spotify</button>
            </form>

        </div>
    ); 

}

export default Playlist;