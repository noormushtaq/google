import React from 'react';
import './App.css';
import googleLogo from './google-logo.png';
import Button from './Button';

import searchicon from './search-icon.png';
import voiceicon from './voice-icon.png';



function Main(){
    return(
       <div>
          
       <main>
         <img src={googleLogo} alt="" class="google-logo" />
         <form action="https://google.ca/search" method="GET">
         <div class="search-container">
         <img src={searchicon} alt="Search Icon" />
       <input type="text" name="q" />
       <img src={voiceicon} alt="Voice Icon" />
     </div>
     
  </form>
</main>
    <Button />
    
      
        </div>

    )
}



export default Main;