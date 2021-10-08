import MyNavbar from './Components/MyNavbar'
import Plancards from './Components/Plancards'
import { Container, Row, Col } from 'reactstrap';
import sponge from './Assets/sponge.png'
import brandbar from './Assets/brandbar.png'
import TidyhostCards from './Components/TidyhostCards'
import TidyhostcardButton from './Components/TidyhostcardButton'
import Reasons from './Components/Reasons'
import Reviews from './Components/Reviews'
import Numberstatscard from './Components/Numberstatscard'
import Blogcard from './Components/Blogcard';
import Requestdemo from './Components/Requestdemo'
import Bottombluepart from './Components/Bottombluepart'
import Openingpictext from './Components/Openingpictext'

import calendar_icon from './Assets/calendar_icon.png'
import checkedbox_icon from './Assets/checkedbox_2.png'
import Location_icon from './Assets/Location_icon.png'
import notepad_icon from './Assets/notepad_icon.png'
import search_icon from './Assets/search_icon.png'
import checkedbox from './Assets/checked.png'
import uncheckedbox from './Assets/unchecked.png'






function App() {
  return (


    <div className="App">
      <Row>
          <div className="navbar">
            <MyNavbar/>
          </div>
    </Row>




    <div className="opening">
      <Openingpictext/>
    </div>
  
      <div className="whytidy">
      <h1 style={{color: '#004A95', fontWeight: "bold"}} >Why TidyHost?</h1>
      <h1 style={{fontSize: '15px'}}> Donec id convallis leo, et consequat velit. Curabitur finibus pellentesque nibh vel aliquam. </h1>



    </div>


      <div className="whytidybelow">
        <TidyhostCards title="Auto Scheduling"  underline="Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi." imgsrc = {calendar_icon}/>
        <TidyhostcardButton title="Virtual Inspection"  underline="Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi." imgsrc = {search_icon}/>
        <TidyhostCards title="Cleaner Scorecards"  underline="Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi." imgsrc = {notepad_icon}/>
        <TidyhostCards title="Custom & Reset Checlist"  underline="Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi." imgsrc={checkedbox_icon}/>
        <TidyhostCards title="Location Tracking" underline="Phasellus rhoncus elementum imperdiet. Fusce et condimentum quam. Sed ac odio ipsum. Donec eget pretium ante, ac malesuada mi." imgsrc = {Location_icon}/>  
        

    </div>


    <div className="divider1"></div>

    <div className="reasons">

        <h1 style={{color: '#004A95', fontWeight: "bold"}} >3 Reasons to Choose TidyHost</h1>
        <h1 style={{fontSize: '15px'}}> Donec id convallis leo, et consequat velit.  </h1>


    </div>

    <div>
      <Reasons/>

    </div>

    <div className="brandbar">

        <img src = {brandbar} alt="brandbar" className="brandbar" />

    </div>

    

    



    <div className="mp-plancards">
      <Row >

        <Col>
          <Plancards type="Basic" price="$0/Month" buttontext="Sign Up for Free" check1={checkedbox} check2={checkedbox} check3={uncheckedbox} check4={uncheckedbox} check5={uncheckedbox} />
        </Col>

        <Col>
          <Plancards type="Pro" price="7.99/Month" buttontext="Buy Popular Plan"  check1={checkedbox} check2={checkedbox} check3={checkedbox} check4={checkedbox} check5={uncheckedbox}/>
        </Col>

        <Col>
          <Plancards type="Commercial" price="Contact Us" buttontext="Talk to Sales"  check1={checkedbox} check2={checkedbox} check3={checkedbox} check4={checkedbox} check5={checkedbox}/>
        </Col>
          
      </Row>

      </div>

      <div className="divider1"></div>

      <div className="reviews">
      <h1 style={{color: '#004A95', fontWeight: "bold"}} >Testimonials</h1>
      <h1 style={{fontSize: '15px'}}> What our hosts think about us</h1>  


      </div >
      <div className="review-cards">
      <Reviews title="cleaner" username="Jhony Doe" rating="4.6" reviewtitle="It was a great experience" review="Fusce dictum pellentesque orci, id faucibus lectus rhoncus ac. Sed viverra rhoncus sem, eget venenatis velit sollicitudin convallis. Suspendisse potenti. Vivamus rutrum elementum nunc a sollicitudin. Praesent vulputate quam non eros lobortis, ac viverra metus posuere. Aenean mauris leo, facilisis quis augue ac, molestie semper risus. Proin ac porttitor mauris, quis feugiat tortor."/>
      <Reviews title="cleaner" username="Emily Gary" rating="5.0" reviewtitle="Great Work!" review="Vivamus rutrum elementum nunc a sollicitudin. Praesent vulputate quam non eros lobortis, ac viverra metus posuere. Aenean mauris leo, facilisis quis augue ac, molestie semper risus. Proin ac porttitor mauris, quis feugiat tortor."/>
      <Reviews title="cleaner" username="Anna Efl" rating="4.8" reviewtitle="Always clean rooms" review="Integer pharetra mattis odio nec sollicitudin. Etiam eleifend quam vitae diam ullamcorper faucibus. Suspendisse lacus eros, rutrum id dolor ac, cursus auctor enim. Sed faucibus condimentum est rhoncus vestibulum. Integer pharetra mattis odio nec sollicitudin. Etiam eleifend quam vitae diam ullamcorper faucibus. Suspendisse lacus eros, rutrum id dolor ac, cursus auctor enim."/>
      </div>


      <div className="numberstats-top">
      <h1 style={{color: '#004A95', fontWeight: "bold"}} >TidyHost by the Numbers</h1>
      <h1 style={{fontSize: '15px'}}> Donec id convallis leo, et consequat velit. Curabitur finibus pellentesque nibh vel aliquam. </h1>  


      </div >


      <div className="numberstats">

        <Row>
          <Col>
          <Numberstatscard numbers="1.000+" type="Happy customers"/>

          </Col>

          <Col>
          <Numberstatscard numbers="35.000+" type="Clean rooms"/>

          </Col>

          <Col>
          <Numberstatscard numbers="5.000+" type="Super hosts"/>

          </Col>

          <Col>
          <Numberstatscard numbers="400+" type="Great Inspectors"/>

          </Col>

          <Col>
          <Numberstatscard numbers="500.000+" type="Rooms to be cleaned"/>

          </Col>



        </Row>

          

      </div>
      <div className="divider1"></div>

      <div className="blog">

      <h1 style={{color: '#004A95', fontWeight: "bold"}} >Blog</h1>
      <h1 style={{fontSize: '15px'}}> Useful resources and popular posts </h1>  

      </div>

      <div className="blogcards">
        <Blogcard title="Home Cleaning" date="11/01/202" explanation="Fusce dictum pellentesque orci, id faucibus lectus rhoncus ac. Sed viverra rhoncus sem, eget venenatis velit sollicitudin convallis. Suspendisse potenti. Vivamus rutrum elementum nunc a sollicitudin." />
        <Blogcard title="Home Cleaning" date="11/01/202" explanation="Fusce dictum pellentesque orci, id faucibus lectus rhoncus ac. Sed viverra rhoncus sem, eget venenatis velit sollicitudin convallis. Suspendisse potenti. Vivamus rutrum elementum nunc a sollicitudin." />
        <Blogcard title="Home Cleaning" date="11/01/202" explanation="Fusce dictum pellentesque orci, id faucibus lectus rhoncus ac. Sed viverra rhoncus sem, eget venenatis velit sollicitudin convallis. Suspendisse potenti. Vivamus rutrum elementum nunc a sollicitudin." />


      </div>

      <div className="divider1"></div>

      <div className="requestdemopart">
        <Requestdemo/>

      </div>



      <div className="bottombluepart">

        <Bottombluepart/>
      </div>





    </div>

      
    

    
    

    
  );
}

export default App;
