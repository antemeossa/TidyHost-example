import React from 'react'
import '../Styles/blogcard.scss'
import { Container, Row, Col } from 'reactstrap';

import bedroompic from '../Assets/bedroom.jpg'






function Blogcard({title, explanation,date}) {
    return(

        
            <div className="blogbox">
                
                    
                    

                    <Row>
                    <Col>
                    <h1 style={{color: '#004A95', fontWeight: "bold", fontSize:"60px"}} >{title}</h1>
                    </Col>

                    <Col>
                    <h1 style={{fontSize: '25px', color:"gray", marginLeft:250}}> {date} </h1>  
                    </Col>

                    </Row>

                    <Row>
                    <h1 style={{fontSize: '25px', color:"gray"}}> {explanation} </h1>  

                    </Row>

                    <Row>
                        <img src={bedroompic} alt="bedroompic" classame="bedroompic"/>
                        <button className="imagebutton">Explore</button>
                    </Row>
                   

               
                
                
                

            </div>
            

    );
}

export default Blogcard;