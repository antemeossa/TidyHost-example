import React from 'react'
import {  Row, Col } from 'reactstrap';
import '../Styles/plancards.scss'
import '../Styles/reasons.scss'
import bedroompic from '../Assets/bedroom.jpg'






function Reasons() {
    return(
            <div className="reasonsbottom" >


                

                    
                <Row>
                    <Col> 

                    <div className="container">
                    <div className="inside">
                    <h1 style={{fontSize:60, marginRight:35}}>1</h1>
                    <h1 style={{}}>Easily manage and view your properties</h1>
                    </div>
                    <h1 style={{color:"gray", fontSize:20, marginBottom: 75}}>Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi.</h1>
                    </div>

                    <div className="container">
                    <div className="inside">
                    <h1 style={{fontSize:60, marginRight:35}}>2</h1>
                    <h1 style={{}}>Get white glove matching service</h1>
                    </div>
                    <h1 style={{color:"gray", fontSize:20,marginBottom: 75}}>Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi.</h1>
                    </div>
                    <div className="container">
                    <div className="inside">
                    <h1 style={{fontSize:60, marginRight:35}}>3</h1>
                    <h1 style={{}}>Exceptional support and outcome</h1>
                    </div>
                    <h1 style={{color:"gray", fontSize:20,marginBottom: 75}}>Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi.</h1>
                    </div>
                     </Col>

                    <Col>  
                    <img src={bedroompic} alt="bedroomimg" className="bedroomimg"/>
                    </Col>
                    

                
                    
                </Row>

                
                

                
                


            </div>


    );
}

export default Reasons;