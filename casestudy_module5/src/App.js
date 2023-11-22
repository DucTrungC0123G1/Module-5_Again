import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListFacility from "./components/facility/ListFacility";
import {AddFacility} from "./components/facility/AddFacility";
import {EditFacility} from "./components/facility/EditFacility";
import {Routes, Route} from "react-router-dom";
import {ListCustomer} from "./components/customer/ListCustomer";
import {AddCustomer} from "./components/customer/AddCustomer";
import {EditCustomer} from "./components/customer/EditCustomer";
import {Index} from "./components/index/Index";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/facility-list" element={<ListFacility/>}/>
                <Route path="/facility-add" element={<AddFacility/>}/>
                <Route path="/facility-edit" element={<EditFacility/>}/>
                <Route path="/customers-list" element={<ListCustomer/>}/>
                <Route path="/customer-add" element={<AddCustomer/>}/>
                <Route path="/customer-edit" element={<EditCustomer/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
