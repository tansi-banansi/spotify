const getUserId = async(spotifyBaseUrl, spotifyAccessToken) =>{
    const baseUrl = spotifyBaseUrl;
    const userProfileEndpoint = '/me';

    const endpoint = baseUrl + userProfileEndpoint;

    try{
        const response = await fetch(endpoint,{
            headers:{
                Authorization: `Bearer ${spotifyAccessToken}`,
            }
        }) 
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.id

        }

        else{
            throw new Error('Request falied!');
          }

    } catch(error){

        console.log(error)
    }


}

export default getUserId;

