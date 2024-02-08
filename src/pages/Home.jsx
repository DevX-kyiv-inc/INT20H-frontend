import { NavLink, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import "./Home.scss";
// import "./HomeCheckbox.scss";

import {Plus} from "../components/UiIcons.jsx";

import {REST} from "../env/config.jsx"
// const testData = [
//    { id: 2867, name: "anal dildo", description: "great joy for your crack" },
//    { id: 5641, name: "vacuum vibrator", description: "🤫" }
// ];

export default function Home() {
    const [auctions, setAuctions] = useState([]);
   const [filterIsClosed, setFilterIsClosed] = useState(false);
   const [filterSort, setFilterSort] = useState("new");
   const submitFilterForm = (e) =>{
      e.preventDefault();
      console.log(REST.getAll(0,filterIsClosed,filterSort));
   }
   useEffect(()=>{
       fetch("http://localhost:8080/api/v2/allAuctions?").then(res=>res.json()).then(
           (data)=>{
               setAuctions(data);
           }
       )
       // REST.getAll(0,false,"new";
   },[])
   return (
      <main>
         <Outlet />
         <h1>Products</h1>
         <form className="filters" onSubmit={submitFilterForm}>
            <div className="filter-input">
               <span>Show slosed</span>
               <label className="custom-checkbox">
    <input type="checkbox" checked={filterIsClosed} onChange={({target})=> setFilterIsClosed(target.checked)}/>
    <span className="checkmark"></span>
  </label>
               
            </div>
            <label className="filter-input">
               <span>sort by</span>
               <div className="custom-select">
    <select value={filterSort} onChange={({target})=> setFilterSort(target.value)}>
      <option value="new">New</option>
      <option value="old">Old</option>
    </select>
  </div>
            </label>
            <button>refresh</button>
         </form>
         <ul className="product-container">
            <li>
                  <NavLink className="create" to="/create"><Plus /><span>new auction</span></NavLink>
            </li>
            {auctions && auctions.map((el, i) => (
               <ProductPreview
                  key={i}
                  id={el.id}
                  name={el.name}
                  description={el.description}
                  price={el.startValue}
                  src={el.photo}
               />
            ))}
         </ul>
      </main>
   );
}

function ProductPreview({ id, name, description, price, src }) {
   return (
      <li>
         <div className="data-container">
            <div className="left">
               <img src={src}/>
            </div>
            <div className="right">
               <h3>{name}</h3>
               {/*<p>10 minutes</p>*/}
               <p>{price}</p>
               <p>{description}</p>
            </div>
         </div>
         <NavLink className="details" to={`/auction/${id}`}>
            Details
         </NavLink>
      </li>
   );
}
