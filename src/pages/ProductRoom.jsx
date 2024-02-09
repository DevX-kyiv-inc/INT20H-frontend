import { Link, useParams } from "react-router-dom";
import "./ProductRoom.scss";
import {REST,AUCTION, CHAT} from "../env/config.jsx";
import { useState, useEffect } from "react";

// socket import
// import Stomp from "stompjs";
// import SockJS from "sockjs-client";
const auctionLoadJSON = {
   id: 23,
   photo: "https/oleg/domination",
   name: "oleg",
   description: "sussy blue balls",

   status: "active",
   expirationDate: "23-45",
   price: 400,
   
   author: "oleg",
   contact: "@bhd_shvk04",

   fundNAME: "Pritula",
   fundPercentage: 50,
}


const sssrc = "https://i.pinimg.com/236x/5e/f2/b5/5ef2b5d507f02118f2622b1c1c1ddd3a.jpg";
export default function ProductRoom() {
   const {id} = useParams();
   const [loadData, setLoadData] = useState(auctionLoadJSON);

   const [bidData, setBidData] = useState({status: auctionLoadJSON.status, price: auctionLoadJSON.price, author: auctionLoadJSON.author});

   useEffect(()=>{
      var stompClient = null;
      function connect() {
         var socket = new SockJS('http://localhost:8080/ws');
         stompClient = Stomp.over(socket);
         stompClient.connect({}, function(frame) {
            stompClient.subscribe('/topic/message/1', function(response) {
               showMessage(JSON.parse(response.body));
            });
         });

      }
      connect();
      // establish auction connection
      // fetch(AUCTION.getOne(id)).then(res=>res.json()).then(data=>{
      //    setLoadData(data);
      //    setBidData({author: data.author, price: data.price, status: data.status})
      // })

      // establish chat connection
      
   },[])

   return (
      <>
         <div className="product-room-main">
            <section className="content">
               {loadData && <ProductInfo data={loadData}/>}
               {bidData && <ProductGUI bidData={bidData}/>}

            </section>
            <aside className="chat">
               <Chat />
               <ChatUI />
            </aside>

         </div>
      </>

   );
}

function ProductInfo({data}){
   return (<div>
      <h1>{data.name}</h1>
      <div className="photo-and-text">
         <div className="photo-container">
            <img src={sssrc} />
         </div>
         <div className="text-container">
            <div className="top">
            <div className="product-description">
            <p>{data.description}</p>
            </div>

            <div className="product-fund">
            <p>{data.fundNAME}</p>
            <p>{data.fundPercentage}</p>
            </div>

            <div className="contacts">
               <p>{data.author}</p>
               <p>{data.contact}</p>
            </div>
            </div>

            <div className="product-expiration">
               <p>{data.expirationDate}</p>
            </div>
         </div>
      </div>
   </div>)
}

function ProductGUI({bidData}){
   return (<div className="product-gui">
      <div className="status-bar">
         <p>{bidData.status}</p>
         <p>${bidData.price}</p>
         <p>last bidder: {bidData.author}</p>
      </div>
      <form className="input-bar">
         <input type="text" />
         <button>BID</button>
      </form>
   </div>)
}


function ChatUI(){
   const [color, setColor] = useState("white");
   const [message, setMessage] = useState("")
   return (<form className="chat-ui" onSubmit={(e)=>{
      e.preventDefault();

   }}>
      <fieldset className="left"><textarea value={message} onChange={setMessage}></textarea></fieldset>
      <fieldset className="right">
      <button>send</button>
         <select value={color} onChange={({target})=>setColor(target.value)}>
            <option value="white">white</option>
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