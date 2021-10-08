import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../Styles/plancards.scss'
import search_icon from '../Assets/search_icon.png'
import '../Styles/tidyhostcards.scss'





function TidyhostCard({title, underline, imgsrc}) {
    return(
            <div className="tidyhostcard" >
                <img src={imgsrc} alt="search-icon" className="search-icon" style={{ margin:10, color: '#003E6B'}}/>
                <h1 style={{ margin:10, color: '#003E6B'}}>{title}</h1>
                <h1 style={{fontSize:15, margin:10}}>{underline}</h1>
                <button className= "signupbutton" style={{}}>Sign Up for Free!</button>


                

                
                


            </div>


    );
}

export default TidyhostCard;