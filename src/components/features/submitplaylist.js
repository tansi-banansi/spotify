const submitPlaylist = async (spotifyBaseUrl, spotifyAccessToken, userId, playlistData) =>{
    const createPlaylistEndpoint = `/users/${userId}/playlists`;
    
    try{
        const response = await fetch((spotifyBaseUrl + createPlaylistEndpoint ),{
            method: 'POST',
            headers:{
                Authorization: `Bearer ${spotifyAccessToken}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: playlistData.name,
                public: false,
            })
        }) 
        if(!response.ok){
            throw new Error('Failed to create playlist');
           
        }

    
        const playlist = await response.json();
        const playlistId = playlist.id;

        const addTracksEndpoint = `playlists/${playlistId}/tracks`; 
    
        const addTracksResponse = await fetch((spotifyBaseUrl + addTracksEndpoint), {
            method: 'POST',
            headers:{
                Authorization: `Bearer ${spotifyAccessToken}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                uris: playlistData.tracks.map(track => track.id),
            }),
             
        })

        alert('Saved to Spotify!')
        
        
        if (!addTracksResponse.ok) {
            throw new Error('Failed to add tracks to playlist');
        }

    } catch(error){

        console.log(error)
    }

}

export default submitPlaylist;
