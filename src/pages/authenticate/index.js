import React from "react";
import authentication from "../../components/features/authentication";
import styles from './index.module.css'

function AuthenticationPage(){

    


    const handleAuthentication = () =>{
        authentication();

    }

    

    return(
        <div>
            <header className={styles.AuthenticationHeader}>
  
                <h1>Jammming</h1>

            </header>


            <div className={styles.AuthenticationPage}>

                <button  className={styles.AuthenticationButton} onClick={handleAuthentication}>Log in to Spotify</button>

            </div>

        </div>
    )
}

export default AuthenticationPage;