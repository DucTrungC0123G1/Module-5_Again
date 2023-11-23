import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {PostList} from "./components/post/PostList";
import {PostCreate} from "./components/post/PostCreate";

function App() {
    return (
        <>
            <Routes>
                <Route path="/post-list" element={<PostList/>}/>
                <Route path="/post-create" element={<PostCreate/>}/>
            </Routes>
        </>

    );
}

export default App;
