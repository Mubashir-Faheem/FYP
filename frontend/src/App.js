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
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Forget from './screens/Forget';
import Main from './screens/Main'
import SeedDetails from './screens/SeedDetails';
// import SeedScreen from './screens/SeedScreen';
import Post from './screens/Blog/Post'
import Posts from './screens/Blog/Posts';
import Topbar from './screens/Blog/Topbar';
// import SearchBar from './screens/Blog/SearchBar';
import SinglePost from './screens/Blog/SinglePost';
import Fertilizerscreen from './screens/FertilizerScreen';
import Forum from './screens/Forum';
import Video from './screens/Videos';
import VirtualGarden from './screens/Virtual Garden/Virtual Garden'
// import SeedScreen from './screens/SeedScreen';
import SeedHome from './screens/SeedHome'
import FertilizerHome from './screens/FertilizerHome';
import FertilizerDetails from './screens/FertilizerDetails'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen'
import RentingHome from './screens/RentingHome';
import RentingDetails from './screens/RentingDetails'
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen'


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
    <Header/>
    <main className="my-3"><Container>
      {/* <h1>E-Commerce App</h1> */}
      {/* <Homescreen /> */}
     {/* <LoginScreen /> */}
     {/* <RegisterScreen /> */}
     {/* {<Main/>} */}
    {/* <SeedScreen/> */}
    {/* <Blog/> */}
    {/* <Fertilizerscreen/> */}
    {/* <SeedHome/> */}
    {/* <FertilizerHome/> */}
    {/* <FertilizerDetails/> */}
    {/* <CartScreen/> */}
    {/* <ShippingScreen/> */}
    {/* <PlaceOrderScreen/> */}
    {/* <OrderScreen/> */}
    {/* <RentingHome/> */}
    {/* <RentingDetails/> */}
    {/* <UserEditScreen/> */}
    {/* <UserListScreen/> */}
    {/* <ProductListScreen/> */}
    {/* <ProductListScreen/> */}



      <Routes >
      <Route path="/" element={<Main />} exact/>

      <Route path="/homescreen" element={<Homescreen />} />
      {/* <Route path="/ProductScreen" element={<ProductScreen />} /> */}
      {/* <Route path="/seedscreen" element={<SeedScreen />} /> */}
      <Route path="/seedscreen" element={<SeedHome />} />
      {/* <Route path="/fertscreen" element={<Fertilizerscreen />} /> */}
      <Route path="/fertscreen" element={<FertilizerHome />} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/topbar" element={<Topbar/>} />
      <Route path="/SinglePost" element={<SinglePost/>} />
      <Route path="/product/:id" element ={<ProductDetails />} />
      <Route path="/seeds/:id" element ={<SeedDetails />} />
      <Route path="/fertilizers/:id" element ={<FertilizerDetails />} />
      <Route path="/renting" element ={<RentingHome />} />
      <Route path="/renting/:id" element ={<RentingDetails />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/videos" element={<Video />} />
      <Route path="/vg" element={<VirtualGarden/>} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/shipping" element={<ShippingScreen/>} />
      <Route path="/profile" element={<ProfileScreen/>} />
      <Route path="/signup" element={<RegisterScreen/>} />
      <Route path="/Forget" element={<Forget />} />
      <Route path="/cart/:id" element={<CartScreen />}/>
      <Route path="/shipping" element={<ShippingScreen />}/>
      <Route path="/payment" element={<PaymentScreen />}/>
      <Route path="/placeorder" element={<PlaceOrderScreen />}/>
      <Route path="/order/:id" element={<OrderScreen/>} />
      <Route path="/admin/user/:id/edit" element={<UserEditScreen/>} />
      <Route path="/admin/userlist" element={<UserListScreen/>} />
      <Route path="/admin/product/:id/edit" element={<ProductEditScreen/>} />
      
      <Route
            path='/admin/productlist'
            element={<ProductListScreen/>}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={<ProductListScreen/>}
            exact
          />




      
      
     
   
    </Routes>
    </Container>
    
    </main>
    <Footer />
    </Router>
  );
}

export default App;
