import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

const product = {
   id: "12123",
   author: "oleg",
   productName: "Oleg",
   description: "232323",
   startValue: "123123",
   contact: ""
};

function App() {
   const [userName, setUserName] = useState("");
   const [displayName, setDisplayName] = useState("");

   const [popapus, setPopapus] = useState(true);

   useEffect(() => {
      setDisplayName((nm) => {
         const savedName = localStorage.getItem("name");
         if (savedName) {
            setPopapus((p)=>false)
            return savedName;
         }
         return "Guest342";
      });
   }, []);
   return (
      <>
         <h1>{displayName}</h1>
         {popapus && <p>Wake up to reality</p>}
         <div className="card">
            <form
               action=""
               onSubmit={(e) => {
                  e.preventDefault();
                  localStorage.setItem("name", userName);
                  setDisplayName((nm) => userName);
               }}
            >
               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="name"
                  value={userName}
                  onChange={(e) => {
                     setUserName((nm) => e.target.value);
                  }}
               />
            </form>
            <p>
               Edit <code>src/App.jsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and React logos to learn more
         </p>
      </>
   );
}

export default App;
