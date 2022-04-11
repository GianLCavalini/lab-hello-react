import "./style.modules.css"

function NavBar() {



     const nav = require("../images/nav-bar.png");
     const logoIronhack = require("../images/ironhack-logo-xs.png");

    return (  

        <div class="nav">
            
            <img src={nav} class="nav-bar" alt="imagem nav-bar" ></img>
            <img src={logoIronhack} class="logoIronhack" alt="logo Ironhack"></img>


        </div>
    ); 
}

export default NavBar;