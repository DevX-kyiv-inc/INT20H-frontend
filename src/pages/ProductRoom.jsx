import { Link, useParams } from "react-router-dom";
import "./ProductRoom.scss";

export default function ProductRoom() {
   const {id} = useParams();
   return (
      <>
         <div className="product-room-main">
            <section className="content">
               <h1>oleg</h1>

            </section>
            <aside className="chat">
               <Chat />
               <ChatUI />
            </aside>
         </div>
      </>
   );
}

function ProductInfo(){
   return (<div>
      
   </div>)
}

function ProductGUI(){
   
}


function ChatUI(){
   return (<form className="chat-ui">
      <fieldset className="left"><textarea></textarea></fieldset>
      <fieldset className="right">
      <button>send</button>
         <select>
            <option value="red">red</option>
            <option value="green">green</option>
         </select>
      </fieldset>
   </form>)
}

function Chat(){
   return (<ul className="message-list">
      <Message />
   </ul>)
}

function Message(){
   return (<li>oleg</li>)
}