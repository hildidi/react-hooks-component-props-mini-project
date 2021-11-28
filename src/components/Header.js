import React from "react";

function Header ({name}){
    console.log('This is the blogname:', name)      
    return (
        <header>
          <h1>{name}</h1>
        </header>
    );


}

export default Header;