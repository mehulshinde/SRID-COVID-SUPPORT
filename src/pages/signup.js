import '../styles/App.css';
import '../styles/VolunteerSignup.css';
import React from 'react';

export default function signup(){
    function handleSubmit(event) {
        if ( (event.target.elements.username.length < 4 )||
            (event.target.elements.password.length < 4 )) {
            alert("Please enter Username Password Correctly")
            // TODO Redirect to home page
        } else {
            
            // TODO Redirect to Dashboard
        }
        event.preventDefault();
    }

        return (
            <>  
                <div className="library-fontello">
                    {/* <i
                        className="icon-left-open back"
                        // onClick={() => {
                        //     history.push('/item-list');
                        // }}
                    ></i> */}
                </div>
                <div className="title" >
                    
                    <h1 >BenevoleBuddy</h1>
                   
                </div>
                <div className="body">
                    
                <form onSubmit={handleSubmit}>
                            <br/>

                            Please Enter your Details below to Register..
                            <br/>
                            <br/>
                        
                        <div> 
                            <div>
                               
                                Username   <input type="text" name="username" className="input"/>
                            </div> 
                            <div>
                               
                                Email ID   <input type="text" name="username" className="input"/>
                            </div> 
                            <div>
                                Password <input type="password" name="password" className="input" pattern="*****" placeholder=" "/>
                            </div>
                        </div>
                        <br/>
                        <div align="center">
                            <input type="submit" className="btn-primary btn" value="Register" id="submit"></input>
                        </div>
                        <div align="center">
                        <a href="#">Already Registerd? Login</a>
                        </div>
                    </form>
                </div>
                
            </>
        );
}