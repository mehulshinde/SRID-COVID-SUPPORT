import React from 'react'
import logo from './logo.svg';
import './styles/App.css';
import VolunteerSignup from "./scripts/VolunteerSignup";



class App extends React.Component{
        render() {
            return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                <VolunteerSignup></VolunteerSignup>
                </header>
            </div>
            );
        }
}

export default App;
