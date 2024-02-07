import { NavLink } from "react-router-dom";
import "./Home.scss";

const testData = [
   { id: 2867, name: "anal dildo", description: "great joy for your crack" },
   { id: 5641, name: "vacuum vibrator", description: "🤫" }
];

export default function Home() {
   return (
      <main>
         <h1>Products</h1>
         <form className="filters">
            <label>
               <span>is she a bad girl?😩</span>
               <input type="checkbox" />
            </label>
            <label>
               <span>sort type</span>
               <select>
                  <option value="new">new</option>
                  <option value="old">old</option>
               </select>
            </label>
            <button>refresh</button>
         </form>
         <ul className="product-container">
            <li>
               <button><NavLink to="/create">create</NavLink></button>
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
         <h3>{name}</h3>
         <NavLink className="details" to={`/product/${id}`}>
            Details
         </NavLink>
      </li>
   );
}
