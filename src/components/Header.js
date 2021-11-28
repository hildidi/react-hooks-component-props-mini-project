import React from "react";

function Header ({blogName}){
    // console.log('This is the blogname:', blogName)      
    return (
        <header>
          <h1>{blogName}</h1>
        </header>
    );


}

export default Header;