import { NavLink, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import "./Home.scss";
// import "./HomeCheckbox.scss";

import {Plus} from "../components/UiIcons.jsx";

import {REST} from "../env/config.jsx"

const testData = [
   { id: 2867, name: "anal dildo", description: "great joy for your crack" },
   { id: 5641, name: "vacuum vibrator", description: "🤫" }
];

export default function Home() {
   const [filterIsClosed, setFilterIsClosed] = useState(false);
   const [filterSort, setFilterSort] = useState("new");
   const submitFilterForm = (e) => {
      const filterData = {
         filterIsClosed,filterSort
      }
      e.preventDefault();
      console.log(REST.getAll(0,filterIsClosed,filterSort));
   }
   useEffect(()=>{
      const data = fetch(REST.getAll(0,false,"new")).then(res=>res.json()).then(data=>data)
   },[])
   return (
      <main>
         <Outlet />
         <h1>Products</h1>
         <form className="filters" onSubmit={submitFilterForm}>
            <div className="filter-input">
               <span>Show slosed</span>
               <label class="custom-checkbox">
    <input type="checkbox" checked={filterIsClosed} onChange={({target})=> setFilterIsClosed(target.checked)}/>
    <span class="checkmark"></span>
  </label>
               
            </div>
            <label className="filter-input">
               <span>sort by</span>
               <div class="custom-select">
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
            {testData.map((el, i) => (
               <ProductPreview
                  key={i}
                  id={el.id}
                  name={el.name}
                  description={el.description}
               />
            ))}
         </ul>
      </main>
   );
}

function ProductPreview({ id, name, description }) {
   return (
      <li>
         <div className="data-container">
            <div className="left">
               <img src="https://i.pinimg.com/564x/03/62/02/03620258dc720856a54eabe2e69f5e69.jpg"/>
            </div>
            <div className="right">
               <h3>{name}</h3>
               <p>10 minutes</p>
               <p>$432</p>
               <p></p>
            </div>
         </div>
         <NavLink className="details" to={`/auction/${id}`}>
            Details
         </NavLink>
      </li>
   );
}
