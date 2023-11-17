import logo from './logo.svg';
import './App.css';
import Greeting from "./components/Greeting";
import React from "react";
import {GreetingAgain} from "./components/GreetingAgain";

function App() {
    return (
        <>
            <Greeting/>
            <GreetingAgain/>
        </>
    );
}

export default App;
