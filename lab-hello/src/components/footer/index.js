import "./style.modules.css"


function Footer() {

    const icon1 = require('../images/icon1.png');
    const icon2 = require('../images/icon2.png');
    const icon3 = require('../images/icon3.png');
    const icon4 = require('../images/icon4.png');



    return(
        <>
    <div class="div-footer" >
        <img src={icon1} align="" class="icones" alt="ferramenta de trabalho sextavada"></img> 
        <img src={icon2} class="icones" alt="ferramenta de trabalho sextavada"></img>
        <img src={icon3} class="icones" alt="ferramenta de trabalho sextavada"></img> 
        <img src={icon4} class="icones" alt="ferramenta de trabalho sextavada"></img> 
       
    </div>

    <div>
    <h2 class="h2-footer">Declarative Componets Single-Way JSX </h2>
        
    </div>
        <p class="p1">React makes it <br/> painless to create <br/> interactive UIs.</p>

        <p class="p2" >Build encapsulated <br/> components that <br/> manage their state.</p>

        <p class="p3" >A set of immutable<br/> values are passed to<br/> the component's.</p>

        <p class="p4" >Statically-tyoed,<br/> designed to run on<br/> modern browsers.</p>


    </>

    )
}

export default Footer;