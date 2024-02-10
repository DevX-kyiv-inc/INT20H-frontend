import { Link, useParams } from "react-router-dom";
import "./ProductRoom.scss";
import {REST,AUCTION, CHAT} from "../env/config.jsx";
import { useState, useEffect } from "react";

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
export default function ProductRoom({userName}) {
   const {id} = useParams();
   const [loadData, setLoadData] = useState(auctionLoadJSON);

   useEffect(() => {
      // load data
      fetch(AUCTION.getOne(id)).then(res=>res.json()).then(data=>{
            setLoadData(data);
         })


      // auction socket establish
      // const auctionSocket = new SockJS(AUCTION.connect);
      
      // setAuctionStomp(Stomp.over(auctionSocket));
      // auctionStomp.connect({}, ()=> {
      //    auctionStomp.subscribe(AUCTION.subscribe(id), (response)=>{
      //       console.log(response);
      //    });
      // })

      // return () => {
      //    // Disconnect the Stomp client when the component is unmounted
      //    if (auctionStomp.connected) {
      //       auctionStomp.disconnect();
      //    }
      //  };

      // establish chat connection
      
   },[])

   return (
      <>
         <div className="product-room-main">
            <section className="content">
               {loadData && <ProductInfo data={loadData}/>}
               <ProductGUI userName={userName}/>

            </section>
            <Chat userName={userName}/>
         </div>
      </>

   );
}

function ProductInfo({data}){
   const currentDate = new Date();
   const [expirationDate, setExpirationDate] = useState(currentDate.setSeconds(currentDate.getSeconds() + 12));
   const [timeDifference, setTimeDifference] = useState(0);
   
   useEffect(() => {
      console.log(new Date(expirationDate));
        const currentDate = new Date();
        console.log(currentDate);
        

      const calculateMinutesRemaining = () => {
        const currentDate = new Date();
        const expirationDateTime = new Date(expirationDate);
        
        // Calculate the difference in milliseconds
        setTimeDifference(Math.floor((expirationDateTime - currentDate) / (1000)));
      };
      calculateMinutesRemaining();
      const timerId = setInterval(calculateMinutesRemaining, 5000);
  
      return () => clearInterval(timerId);
    }, [expirationDate]);


    function formatTime(seconds) {
      // Ensure seconds is a non-negative integer
      seconds = Math.max(0, Math.floor(seconds));
  
      // Calculate minutes and remaining seconds
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
  
      // Format the time as "mm:ss"
      var formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  
      return formattedTime;
  }
   return (<div>
      <h1>{data.name}</h1>
      <div className="photo-and-text">
         <div className="photo-container">
            <img src={sssrc} />
         </div>
         <div className="text-container">
            <div className="top">
            <div className="product-description">
               <h4>Description:</h4>
               <p>{data.description}</p>
            </div>

            <div className="product-fund">
               <h4>Fund:</h4>
            <p>{data.fundPercentage}% of money will be given to {data.fundNAME} fund</p>
            </div>

            <div className="contacts">
               <h4>Author and contacts:</h4>
               <p>Auhtor name: {data.author}</p>
               <p>Telegram: {data.contact}</p>
            </div>
            </div>

            <div className="product-expiration">
               <p>Time left: {formatTime(timeDifference)}</p>
            </div>
         </div>
      </div>
   </div>)
}

function ProductGUI({userName}){
   const [bidData, setBidData] = useState({});

   const [bidStomp, setBidStomp] = useState(null);


   const [inputBidValue, setInputBidValue] = useState(0);

   useEffect(()=>{
      // const socket = new SockJS(AUCTION.connect);
      // setBidStomp(Stomp.over(socket));
      // bidStomp.connect({}, ()=> {
      //       bidStomp.subscribe(AUCTION.subscribe(id), (response)=>{
      //          console.log(response);
      //       });
      //    })
      // return () => {
         //    if (auctionStomp.connected) {
         //       auctionStomp.disconnect();
         //    }
         //  };
      
   },[])
   return (<div className="product-gui">
      <div className="status-bar">
         <div className="status-status">
            <p>Status: <span className={bidData.status ? "status-active" : "status-closed"}>{bidData.status ? "active" : "closed"}</span></p>
         </div>
         <div className="bid-statu">
            <p>${bidData.price}</p>
            <p>last bidder: {bidData.author}</p>
         </div>
      </div>
      <form className="input-bar" onSubmit={(e)=>{
         e.preventDefault();
         const sendData={
            value: inputBidValue,
            name: userName
         }
         // bidStomp.send(AUCTION.sendTo(id),{},)
      }}>
         <input type="number" value={inputBidValue} onChange={({target})=>setInputBidValue(target.value)}/>
         <button>BID</button>
      </form>
   </div>)
}




function Chat({userName}){
   const [chatStomp, setChatStomp] = useState(null);
   const [messages, setMessages] = useState([]);

   useEffect(()=>{
      // const socket = new SockJS(CHAT.connect);
      // setChatStomp(Stomp.over(socket));
      // chatStomp.connect({}, ()=> {
      //    chatStomp.subscribe(CHAT.subscribe(id), (response)=>{
      //          console.log(response);
      //       });
      //    })
      // return () => {
      //       if (chatStomp.connected) {
      //          chatStomp.disconnect();
      //       }
      //     };
   },[])
   return (<aside className="chat">
      <ul className="message-list">
      {messages && messages.map((el,i)=> <Message key={i} sender={el.sender} message={el.message} color={el.color}/>)}
   </ul>
      <ChatUI chatStomp={chatStomp} userName={userName}/>
   </aside>)
}

function Message({sender, message, color}){
   return (<li><span style={{color: color}}>{sender}: </span> <span>{message}</span></li>)
}

function ChatUI({chatStomp, userName}){
   const [color, setColor] = useState("#fbfbfb");
   const [message, setMessage] = useState("");
   return (<form className="chat-ui" onSubmit={(e)=>{
      e.preventDefault();
      const sendData={
         message: inputBidValue,
         sender: userName,
         color
      }
      // bidStomp.send(AUCTION.sendTo(id),{},)
      chatStomp.send()
   }}>
      <fieldset className="left"><textarea value={message} onChange={setMessage}></textarea></fieldset>
      <fieldset className="right">
      <button>send</button>
         <select value={color} onChange={({target})=>setColor(target.value)}>
            <option value="#fbfbfb">white</option>
            <option value="#dc4c64">red</option>
            <option value="#14a44d">green</option>
            <option value="#3b71ca">blue</option>
         </select>
      </fieldset>
   </form>)
}

