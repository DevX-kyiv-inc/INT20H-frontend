import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import UserName from "./components/UserName.jsx";
import Layout from "./Layout.jsx";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductForm from "./pages/ProductForm.jsx";
import ProductRoom from "./pages/ProductRoom.jsx";
import Funds from "./pages/Funds.jsx";
import Info from "./pages/info.jsx";

const product = {
   id: "12123",
   author: "oleg",
   productName: "Oleg",
   description: "232323",
   startValue: "123123",
   contact: ""
};

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route path="/" element={<Home/>}/>
               <Route path="/create" element={<ProductForm/>}/>
               <Route path="/product/:id" element={<ProductRoom/>}/>
               <Route path="/funds" element={<Funds />}/>
               <Route path="/info" element={<Info />}/>
               </Route>   
         </Routes>
         
      </BrowserRouter>
   );
}



export default App;