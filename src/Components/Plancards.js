import React from 'react'
import {  Col } from 'reactstrap';
import '../Styles/plancards.scss'





function Plancards({type, price,buttontext,check1,check2,check3,check4,check5}) {
    return(
            <div className="plancards">
                


                <div className="topPart">
                <h1 style={{fontSize:15, marginBottom:0, color: "gray"}}>{type}</h1>
                <h1>{price}</h1>

                </div>
              
                
                <Col >

                <div classname="elements">
                
                        
                        <img src={check1} alt="checkedimg" className="checkedimg" />
                        <span>this is a text</span>

                        


                </div>
                
                <div classname="elements">
                
                        
                        <img src={check2} alt="checkedimg" className="checkedimg" />
                        <span>this is a text</span>

                        


                </div>
                <div classname="elements">
                
                        
                        <img src={check3} alt="checkedimg" className="checkedimg" />
                        <span>this is a text</span>

                        


                </div>
                <div classname="elements">
                
                        
                        <img src={check4} alt="checkedimg" className="checkedimg" />
                        <span>this is a text</span>

                        


                </div>
                <div classname="elements">
                
                        
                        <img src={check5} alt="uncheckedimg" className="uncheckedimg" />
                        <span>this is a text</span>

                        


                </div>

                    <div >

                    <button className="planbutton">{buttontext}</button>



                    </div>
                    
                

                    
                </Col>

                
                


            </div>


    );
}

export default Plancards;