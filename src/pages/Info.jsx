// import { Children } from "react";
import { useEffect } from "react";
import LinkidinIcon from "/likidin.svg";

export default function Info() {
   // test
   // useEffect(()=>{
   //    fetch("https://v2.jokeapi.dev/joke/Any").then(({status}) => {
   //       if (`${status}`[0] === "2"){
   //          console.log(status);
   //          console.log("okay")
   //       }
   //    });
   // },[])
   // test
   return (
      <main>
         <h1>Info</h1>
         <p>Тестове завдання хакатону INT20H від команди DevX</p>
         <p>Учасники команди:</p>
         <ul>
            <Teammate
               postion={"TeamLead/Front-end"}
               name={"Шовкопляс Богдан"}
               anchor={
                  "https://www.linkedin.com/in/bohdan-shovkoplias-271845266/"
               }
            />
            <Teammate
               postion={"Devops/Back-end"}
               name={"Федеров Артем"}
               anchor={"https://www.linkedin.com/in/artem-fedorov-10b694282/"}
            />
            <Teammate
               postion={"Database manager/Logo"}
               name={"Данечкін Микита"}
               anchor={"https://www.linkedin.com/in/mykytadanechkin/"}
            />
            <Teammate
               postion={"Consult manager"}
               name={"Бриль Сергій"}
               anchor={"https://www.linkedin.com/in/serhii-bryl-0426bb282/"}
            />
            {/* <p>Проєкт повністю розроблений Шовкоплясом Богданом Вікторовичем</p> */}
         </ul>
      </main>
   );
}

function Teammate({ postion, name, anchor }) {
   return (
      <li>
         {postion}:{" "}
         <a
            style={{
               color: "#3b71ca",
               textDecoration: "underline"
            }}
            target="_blank"
            href={anchor}
         >
            {name}{" "}
            (
            <img
               style={{
                  height: "10px"
               }}
               src={LinkidinIcon}
            /> )
         </a>
      </li>
   );
}
