import React from 'react'
import '../Styles/reviews.scss'
import usericon from '../Assets/usericon.png'
import { Container, Row, Col } from 'reactstrap';





function TidyhostCard({title, username, review, reviewtitle,rating}) {
    return(

        
            <div className="reviewbox">
                <Row>
                    <Col>
                    <img src={usericon} alt="usericon" className="usericon"/>
                    </Col>

                    <Col>
                    <h1 style={{fontSize:15}}>{title}</h1>
                    <h1 style={{fontSize:25, color:"#004AB4", fontWeight:"bold"}}>{username}</h1>

                    </Col>

                    <Col>
                    <h1 style={{fontSize:35, color:"#004AB4"}}>{rating}</h1>
                    

                    </Col>
                </Row>

                <Row>
                    <h1 style={{fontSize:25, color:"#004AB4"}} >{reviewtitle}</h1>
                    <h1 style={{fontSize:15}} >{review}</h1>
                </Row>
                
                
                

            </div>
            

    );
}

export default TidyhostCard;