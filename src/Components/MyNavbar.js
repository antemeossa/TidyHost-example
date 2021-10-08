import React from 'react'



function myNavbar() {
    return(
            <nav className="navbar">
                <h1>Tidy Host</h1>
                <a href="why">Why TidyHost?</a>
                <a href="features">Features</a>
                <a href="plans">Plans</a>
                <a href="covid">Covid-19</a>
                <a href="Contact">Contact</a>         
                
                
                <a href = "signup" style ={{ 
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Sign Up</a>

                <a href = "signin" style ={{ 
                    color: "white",
                    backgroundColor: 'gray',
                    borderRadius: '8px'
                }}>Sign In</a>
            </nav>


    );
}

export default myNavbar;