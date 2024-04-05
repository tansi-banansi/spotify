import React from "react";
import Playlist from "../../components/playlist";
import SearchBar from "../../components/searchbar";
import SearchResults from "../../components/searchresult";
import { useState } from "react";
import styles from './index.module.css'
import { useNavigate } from "react-router-dom";
import getUserId from '../../components/features/spotifydetails'
import submitPlaylist from "../../components/features/submitplaylist";


function HomePage(){
    const spotifyBaseUrl = 'https://api.spotify.com/v1';
    const spotifyAccessToken = localStorage.getItem('accessToken');
    const [playlist, setPlaylist] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [userId, setUserId] = useState('')
    const navigate = useNavigate();
  
    const addTrackToPlaylist = (track) =>{
      setPlaylist([...playlist, track])
    } 
  
    const removeTrackFromPlaylist = (track) =>{
      setPlaylist(playlist.filter(item => item.id !== track.id))
      
    }

    const handleLogout = () =>{
  
      localStorage.removeItem('accessToken')
      navigate("/authenticate");
    
  }
    
    const handleSubmit = async (playlistData) => {
      try {
        const userId =  await getUserId(spotifyBaseUrl, spotifyAccessToken);
        setUserId(userId);
      } catch(e){
        console.log(e);
      }

      submitPlaylist(spotifyBaseUrl, spotifyAccessToken, userId, playlistData)

      setPlaylist([]);
      setSearchResults([]);

    };

   

  
    const handleSearch = async(searchQuery) => {
      const searchEndpoint = '/search';
      const requestParams = "?q=" + searchQuery + '&type=track';
  
      const endpoint = spotifyBaseUrl + searchEndpoint + requestParams;
  
      try{
        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          }
        })
        if(response.ok){
          const jsonResponse = await response.json();
          setSearchResults(jsonResponse.tracks.items)
          
        } else {
          throw new Error('Request falied!');
        }
  
      }
  
      catch(error){
        console.log(error)
      }
  
    }
   
  
    return(
      <div>
        
        <header className={styles.HomePageHeader}>
  
          <h1>Jammming</h1>
  
          <button className={styles.HomePageButton} onClick={handleLogout}>Logout</button>
  
          </header>
  
  
    
          <div className={styles.HomePage}>
  
           <main>
  
              <SearchBar onClick = {handleSearch} />
  
              <div className={styles.HomePageList}>
  
                <SearchResults searchResults={searchResults} onAdd={addTrackToPlaylist}/>
                <Playlist playlist={playlist} onRemove={removeTrackFromPlaylist} onSubmit={handleSubmit}/>
  
              </div> 
  
            </main>
            
          </div> 

  
      </div>
    )
}

export default HomePage;