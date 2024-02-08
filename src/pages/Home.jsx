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
               <span>Show slosed</span>
               <input type="checkbox" />
            </label>
            <label>
               <span>sort by</span>
               <select>
                  <option value="new">new</option>
                  <option value="old">old</option>
               </select>
            </label>
            <button>refresh</button>
         </form>
         <ul className="product-container">
            <li>
               <button>
                  <NavLink to="/create">create</NavLink>
               </button>
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
            </div>
         </div>
         <NavLink className="details" to={`/product/${id}`}>
            Details
         </NavLink>
      </li>
   );
}
