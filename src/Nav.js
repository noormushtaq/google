import React from 'react';
import menu from './menu.png';


function Nav(){
    return(
    <div>
       
    <nav>
    <div>
      <a href="#">About</a>
      <a href="#">Store</a>
    </div>
    <div class="nav-right">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <img src={menu}/>
      <img src="http://placehold.it/50x50" />
    </div> 
   </nav>
  
</div>
    )
}

export default Nav;