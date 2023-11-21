import logo from './logo.svg';
import './App.css';
import React from "react";
import {Blog} from "./components/Blog";
import {ListPost} from "./components/ListPost";
import {ListBlog} from "./components/ListBlog";
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <>
            <Routes>
                {/*<Blog/>*/}
                {/*<ListPost/>*/}
                <Route path="/" element={<ListBlog/>}/>
            </Routes>

        </>
    );
}

export default App;
