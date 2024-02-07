import { useParams } from "react-router-dom";

export default function ProductRoom() {
   const {id} = useParams();
   return (
      <>
         <main>
            <div className="product-room">
               <h1>{id}</h1>

               <div className="buttons">
                  <button>Raise</button>
               </div>
               <input type="text" />
               <button>raise custom</button>
            </div>
            <aside className="chat">chatnahui</aside>
         </main>
      </>
   );
}
