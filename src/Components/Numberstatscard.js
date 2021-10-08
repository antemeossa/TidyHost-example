import React from 'react'
import '../Styles/numberstats.scss'





function Numberstatscard({numbers, type}) {
    return(

        
            <div className="numberstatsbox">
                
                    <h1 style={{color: '#004A95', fontWeight: "bold", fontSize:"60px"}} >{numbers}</h1>
                    <h1 style={{fontSize: '25px', color:"gray"}}> {type} </h1>  
                   

               
                
                
                

            </div>
            

    );
}

export default Numberstatscard;