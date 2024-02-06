import { Outlet, NavLink } from "react-router-dom";
import UserName from "./components/UserName";

import { useState } from "react";

import "./Layout.scss"
function Layout() {
   const [userName, setUserName] = useState("")
   return (
      <>
         <header className="header">
            <nav>
               <ul>
                  <li>
                     <NavLink to="/">CharitX</NavLink>
                  </li>
                  <li>
                     <NavLink to="funds">Funds</NavLink>
                  </li>
               </ul>
               <ul>
                  <li>
                     <NavLink to="info">Info</NavLink>
                  </li>
                  <li>
                     <UserName userName={userName} setUserName={setUserName}/>
                  </li>
               </ul>
            </nav>
         </header>
         <Outlet />
         <footer className="footer">Footeer</footer>
      </>
   );
}

export default Layout;
