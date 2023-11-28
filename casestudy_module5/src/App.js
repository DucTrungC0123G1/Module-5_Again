import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ListFacility from "./components/facility/ListFacility";
import {AddFacility} from "./components/facility/AddFacility";
import {EditFacility} from "./components/facility/EditFacility";
import {Routes, Route} from "react-router-dom";
import {AddCustomer} from "./components/customer/AddCustomer";
import {EditCustomer} from "./components/customer/EditCustomer";
import {Index} from "./components/index/Index";
import ListCustomer from "./components/customer/ListCustomer";
import {VillaList} from "./components/facility/villa/VillaList";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ListContract} from "./components/contract/ListContract";
import ContractCreate from "./components/contract/CreateContract";
import CreateContract from "./components/contract/CreateContract";
import EditContract from "./components/contract/EditContract";
import {RoomList} from "./components/facility/room/RoomList";
import {HouseList} from "./components/facility/house/HouseList";
import {AddRoom} from "./components/facility/room/AddRoom";
import {EditRoom} from "./components/facility/room/EditRoom";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/facility-list" element={<ListFacility/>}/>
                <Route path="/facility-add" element={<AddFacility/>}/>
                <Route path="/facility-edit" element={<EditFacility/>}/>
                <Route path="/facility-villa" element={<VillaList/>}/>
                <Route path="/facility-room" element={<RoomList/>}/>
                <Route path="/facility-room-add" element={<AddRoom/>}/>
                <Route path="/facility-room-edit/:id" element={<EditRoom/>}/>
                <Route path="/facility-house" element={<HouseList/>}/>
                <Route path="/customers-list" element={<ListCustomer/>}/>
                <Route path="/customer-add" element={<AddCustomer/>}/>
                <Route path="/customer-edit/:id" element={<EditCustomer/>}/>
                <Route path="/contract-list" element={<ListContract/>}/>
                <Route path="/contract-add" element={<CreateContract/>}/>
                <Route path="/contract-edit/:id" element={<EditContract/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </>
    );
}

export default App;
