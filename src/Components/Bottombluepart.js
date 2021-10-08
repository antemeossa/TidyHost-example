import React from 'react'
import '../Styles/bottombluepart.scss'
import { Container, Row, Col } from 'reactstrap';







function Bottombluepart() {
    return(

        
            <div className="blueboxcontainer">
                
                <div className="blueboxinside"></div>
                    
                    <Row>
                    <Col>
                    <Row>
                        
                        <h1 style={{color:"white" , fontSize: 25, fontWeight: "bold"}}>Tidy Host</h1>
                       
                    </Row>

                    <Row>
                    <a href="why" >Why TidyHost?</a>

                    
                
                
                
                    </Row>

                    <Row>
                    <a href="features">Features</a>
                    </Row>

                    <Row>
                    <a href="plans">Plans</a>
                    </Row>

                    <Row>
                    <a href="covid">Covid-19</a>
                    </Row>


                    

                    </Col>

                    <Col>
                    <Row>
                        
                        <h1 style={{color:"white" , fontSize: 25, fontWeight: "bold"}}>Tidy Host</h1>
                       
                    </Row>

                    <Row>
                    <a href="findcleaner">Find Cleaners</a>
                    </Row>

                    <Row>
                    <a href="forhosts">For Hosts</a>
                    </Row>

                    <Row>
                    <a href="formommercial">For Commercial</a>
                    </Row>

                    <Row>
                    <a href="tryfree">Try for Free</a>
                    </Row>


                    

                    </Col>

                    <Col>
                    <Row>
                        
                        <h1 style={{color:"gray" , fontSize: 15 }}>Subscribe to get latest updates</h1>
                       
                    </Row>

                    <Row>
                    <input type="text" name="sub-email" placeholder="your@emailadress.com"/>
                    </Row>

                    <Row>
                    <h1 style={{color:"gray" , fontSize: 15, marginTop:10, marginLeft: 400}}>Copyright 2020</h1>
                    </Row>

                    


                    

                    </Col>
                    </Row>

                    
                
                
                

            </div>
            

    );
}

export default Bottombluepart;