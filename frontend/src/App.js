// import logo from './logo.svg';

import './App.css';
import Container from "react-bootstrap/Container"
import React from 'react'
import Footer from "./components/footer"
import Header from "./components/header"
import Homescreen from "./screens/homescreen"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import ProductDetails from "./screens/ProductDetails"
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Forget from './screens/Forget';
import Main from './screens/Main'
import SeedDetails from './screens/SeedDetails';
import Forum from './screens/Forum';
import Video from './screens/Videos';
import VirtualGarden from './components/Virtual Garden/Garden'
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
import OrderListScreen from './screens/OrderListScreen';
import BlogHome from './screens/BlogHome';
import BlogDetails from './screens/BlogDetails';
import BlogListScreen from './screens/BlogListScreen';
import BlogEditScreen from './screens/BlogEditScreen'
import RentingListScreen from './screens/RentingListScreen'
import RentingEditScreen from './screens/RentingEditScreen';
// import VirtualGarden from './screens/Garden'



function App() {


  
  return (

    <Router>
    <Header/>
    <main className="my-3"><Container>
     {/* <VirtualGarden/> */}
      <Routes >
      <Route path="/" element={<Main />} exact/>

      <Route path="/homescreen" element={<Homescreen />} />
      <Route path="/seedscreen" element={<SeedHome />} />
      <Route path="/fertscreen" element={<FertilizerHome />} />
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
      <Route path="/admin/orderlist" element={<OrderListScreen/>} />
      <Route path="/blogscreen" element={<BlogHome/>} />
      <Route path="/blog/:id" element={<BlogDetails/>} />
      <Route path="/admin/bloglist" element={<BlogListScreen/>} />
      <Route path="/admin/blog/:id/edit" element={<BlogEditScreen/>} />
      <Route path="/admin/rentinglist" element={<RentingListScreen/>} />
      <Route path="/admin/service/:id/edit" element={<RentingEditScreen/>} />
      <Route path='/admin/productlist' element={<ProductListScreen/>} exact/>
      <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>} exact />
  
    </Routes>
    </Container>
    
    </main>
    <Footer />
    </Router>
  );
}

export default App;
