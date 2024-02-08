import "./Funds.scss"

export default function Funds(){
   return (<main>
      <h1>Funds</h1>
      <ul className="funds">
         <Fund name={"Фонд Сергія Притули"} money={1233}/>
         <Fund name={"Фонд Сергія Притули"} money={1233}/>
         <Fund name={"Фонд Сергія Притули"} money={1233}/>
         <Fund name={"Фонд Сергія Притули"} money={1233}/>
      </ul>
   </main>)
}

function Fund({name, money}){
   return (<li className="fund">
      <h2>{name}</h2>
      <p>{money}</p>
   </li>)
}