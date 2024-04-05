const submitPlaylist = async (spotifyBaseUrl, spotifyAccessToken, userId, playlistData) =>{
    const createPlaylistEndpoint = `/me/playlists`;
    const endpoint = spotifyBaseUrl + createPlaylistEndpoint;
    const body = JSON.stringify(playlistData)
    alert(body)

    try{
        const response = await fetch(endpoint,{
            method: 'POST',
            body: body,
            headers:{
                Authorization: `Bearer ${spotifyAccessToken}`,
                'Content-type': 'application/json',
            }
        }) 
        if(response.ok){
            const jsonResponse = await response.json();
            alert('saved')
            
        }

        else{
            throw new Error('Request falied!');
          }

    } catch(error){

        console.log(error)
    }



}

export default submitPlaylist;
