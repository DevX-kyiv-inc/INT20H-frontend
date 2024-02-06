import { useState, useEffect } from "react";

import { Edit, Close } from "./UiIcons.jsx";

import "./UserName.scss";
function UserName({ userName, setUserName }) {
   const [showForm, setShowForm] = useState(false);
   useEffect(() => {
      setUserName(nm=>{
         const x = localStorage.getItem("username");
         if (x) return x;
         return "guest1234"
      })
   }, []);
   return (
      <div className="user-name">
         <div className="overlay">
            <EditForm setDisplayNameP={setUserName} showFormP={showForm} />
         </div>
         <div className="container">
            <span>{userName}</span>
            <div
               onClick={(e) => {
                  setShowForm((shF) => !shF);
               }}
            >
               <Edit />
            </div>
         </div>
      </div>
   );
}

function EditForm({ setDisplayNameP, showFormP }) {
   const [userName, setUserName] = useState("");
   return (
      <div className={"popapus" + `${showFormP ? " --active" : ""}`}>
         <form
            className="form"
            onSubmit={(e) => {
               e.preventDefault();
               setDisplayNameP((nm) => userName);
               localStorage.setItem("username", userName)
            }}
         >
            <input
               type="text"
               value={userName}
               onChange={(e) => setUserName((nm) => e.target.value)}
            />
            <button>Save</button>
         </form>
      </div>
   );
}

export default UserName;
