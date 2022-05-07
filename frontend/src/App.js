// import logo from './logo.svg';

import './App.css';
import Container from "react-bootstrap/Container"
// import React, { Component }  from 'react';
import React from 'react'
import Footer from "./components/footer"
import Header from "./components/header"
import Homescreen from "./screens/homescreen"
// import {ProductShow} from "./screens/ProductScreen"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
// import ProductScreen from "./screens/ProductScreen"
import ProductDetails from "./screens/ProductDetails"
import Login from "./screens/Login/Login"
import Register from './screens/Register'
import Forget from './screens/Forget';
import Main from './screens/Main'
import SeedDetails from './screens/SeedDetails';
// import SeedScreen from './screens/SeedScreen';
import Post from './screens/Blog/Post'
import Posts from './screens/Blog/Posts';
import Topbar from './screens/Blog/Topbar';
// import SearchBar from './screens/Blog/SearchBar';
import SinglePost from './screens/Blog/SinglePost';
import Fertilizerscreen from './screens/FertScreen';
import Forum from './screens/Forum';
import Video from './screens/Videos';
import VirtualGarden from './screens/Vg';
// import Cart from './screens/Cart'
// import StateProvider from './StateProvider'
// import  CCartContextProvider from './Contexts/CartContext'


// import Register from "./screens/Register/Register"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"


function App() {
  return (

    <Router>
    <Header />
    <main className="my-3"><Container>
      {/* <h1>E-Commerce App</h1> */}
      {/* <Homescreen /> */}
     {/* <Login /> */}
     {/* <Register /> */}
     {/* {<Main/>} */}
    {/* <SeedScreen/> */}
    {/* <Blog/> */}
    {/* <Fertilizerscreen/> */}
      <Routes >
      <Route path="/" element={<Main />} exact/>

      <Route path="/homescreen" element={<Homescreen />} />
      {/* <Route path="/ProductScreen" element={<ProductScreen />} /> */}
      {/* <Route path="/seedscreen" element={<SeedScreen />} /> */}
      <Route path="/fertscreen" element={<Fertilizerscreen />} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/topbar" element={<Topbar/>} />
      <Route path="/SinglePost" element={<SinglePost/>} />
      <Route path="/product/:id" element ={<ProductDetails />} />
      <Route path="/seed/:id" element ={<SeedDetails />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/videos" element={<Video />} />
      <Route path="/vg" element={<VirtualGarden/>} />
      <Route path="/signin" element={< Login />} />
      <Route path="signup" element={<Register/>} />
      <Route path="/Forget" element={<Forget />} />
      {/* <Route path="/Cart" element={<Cart />} /> */}

      {/* <Route path="/signup" element={< Register />} /> */}
   
    </Routes>
    </Container>
    
    </main>
    <Footer />
    </Router>
  );
}

export default App;
