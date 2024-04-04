import React from "react";
import styles from './track.module.css'

function Track({track, key, isInPlaylist, onAdd, onRemove}) {

    const handleAdd = (item) =>{
        onAdd(item);
    } 

    const handleRemove = (item) => {
        onRemove(item);
    }

    return(
        <div className={styles.Track}>
            <div className={styles.TrackInfo}>
                <h3>{track.album.name}</h3>
                <p>{track.artists.map(artist => artist.name).join(', ')} | {track.name} </p>
            </div>

            <div className={styles.TrackAction}>
                {isInPlaylist ? 
                <button className={styles.InPlaylist} type="button" onClick={() => handleRemove(track,key)}>-</button> :
                <button className={styles.InSearchlist} type="button" onClick={() => handleAdd(track)}>+</button>
            }

            </div>
        </div>
    )
}

export default Track;
