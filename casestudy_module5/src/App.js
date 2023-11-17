import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListFacility from "./components/facility/ListFacility";

function App() {
    return (

        <>
            <Header/>
            <ListFacility/>
            <Footer/>
        </>
    );
}

export default App;
