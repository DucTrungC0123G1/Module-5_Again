import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListFacility from "./components/facility/ListFacility";
import {AddFacility} from "./components/facility/AddFacility";
import {EditFacility} from "./components/facility/EditFacility";

function App() {
    return (

        <>
            <Header/>
            <ListFacility/>
            <AddFacility/>
            <EditFacility/>
            <Footer/>
        </>
    );
}

export default App;
