import React from 'react'
import '../Styles/requestdemo.scss'
import { Container, Row, Col } from 'reactstrap';







function Requestdemo() {
    return(

        
            <div className="requestbox">
                
                <div className="requestboxinputs"></div>
                    

                    <Row>
                    <Col>
                        <h1 style={{color:"#004A95" , fontSize: 25}}>Request a demo</h1>
                        <h1 style={{color:"#004A95" , fontSize: 35, fontWeight: "bold"}}>Clean Your Home</h1>
                    </Col>

                    <Col>
                    <h1 style={{color:"#004A95" , fontSize: 25}}>Call Us: 833-TDY-HOST</h1>
                    </Col>

                    </Row>

                    <Row>
                        <Col>
                             
                        <input placeholder= "Name" type="text" name="name" />
                         
                        </Col>


                        <Col>
                        <input placeholder= "Email Adress" type="text" name="email" />
                        </Col>


                        <Col> <input placeholder= "How many properties do you manage?" type="text" name="propertycount" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <input placeholder= "Phone" type="text" name="phone" />
                        </Col>


                        <Col>
                        
                        <input placeholder= "Country" type="text" name="country" />
                        </Col>


                        <Col>
                        <input placeholder= "City/State" type="text" name="city" />
                        </Col>

                    </Row>

<div className="requestsubmitdiv">
                    <input className="submitbtn" type="submit" value="Submit" />
                   
                    </div>
                    
                
                
                

            </div>
            

    );
}

export default Requestdemo;