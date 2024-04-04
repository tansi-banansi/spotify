import React from "react";
import Track from "./track";

function Tracklist({tracks,isInPlaylist, onAdd, onRemove}){

    return (
        <div>
            {tracks.map((track, i) => (
                <Track 
                key={i}
                track={track}
                isInPlaylist={isInPlaylist}
                onAdd={onAdd}
                onRemove={onRemove} 
                />
            ))}
        </div>
    )
    
}

export default Tracklist;
