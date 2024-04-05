import React, {useState} from "react";
import styles from './index.module.css'
import Tracklist from "../tracklist";

 
function Playlist({onSubmit,playlist, onRemove}){
    const [playlistName, setPlaylistName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();  

        const playlistData = {
            name:playlistName,
            tracks: playlist.map(track => ({
                id: `spotify:track:${track.id}`,
                name: track.name,
                artist: track.artist
            })) 

        

        }
        onSubmit(playlistData); 
      };

    return (
        <div className={styles.Playlist}>

            <form onSubmit={handleSubmit}> 
                <input 
                    className={styles.InputPlaylist}
                    name="name"
                    placeholder="Playlist name"
                    type="text"
                    value={playlistName}
                    onChange={(event) => setPlaylistName(event.target.value)}
                    required
                />

                <Tracklist tracks={playlist} onRemove={onRemove} isInPlaylist={true}/>

                <button className={styles.ButtonPlaylist} type="submit">Save To Spotify</button>
            </form>

        </div>
    ); 

}

export default Playlist;