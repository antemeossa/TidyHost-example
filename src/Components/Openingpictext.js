import React from 'react'
import '../Styles/opening.scss'
import { Container, Row, Col } from 'reactstrap';
import sponge from '../Assets/sponge.png'








function Openingpictext() {
    return(

        <div className="group1">
            
            <Row >
      
      
      
      
      
      <Col>

          <div className="group1text">
          <h1 style={{color: '#004A95', fontWeight: "bold"}} > Clean Properties. Clear Minds. Hassle-free</h1>
          
          
         
          <h1 style={{color: '#7C7C7C', fontSize:15}} > Sed in tempus elit. Donec id convallis leo, et consequat velit. Curabitur finibus pellentesque nibh vel aliquam. Sed sem sapien, faucibus ut eleifend in, aliquam sit amet erat. In hac habitasse platea dictumst. In tristique ipsum mi, consequat tempus nulla ultricies eget.</h1>
          
          </div>

          </Col>
      
      

      
      <Col>
        <img src = {sponge} alt="spongeimage" className="spongeimg"/> 
        </Col>
      
      
      
      


      </Row>
                
                
                

            </div>
            

    );
}

export default Openingpictext;

