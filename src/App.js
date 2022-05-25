import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [todos, settodos] = useState([]);
  const [totalcount, setTotalcount] = useState(0);
  const [limit,setLimit] = useState(5)

  // 1st method
  // useEffect (()=>{
  //   const getTodo = async () =>{
  //     let r = await axios.get("http://localhost:3004/todos");
  //     let data = await r.json()
  //     console.log(r)
  //     settodos(r.data)
  //   }
  //   getTodo();
  // },[])

  // 2nd method
  useEffect(() => {
    axios
      .get(`https://m6g3bt.sse.codesandbox.io/todos?_page=${page}&_limit=${limit}`)
      .then((r) => {
        console.log(r)
        settodos(r.data);
        setTotalcount(r.headers["x-total-count"])
      });
  }, [page,limit]);

  return (
    <div className="App">
      {todos.map((el, index) => (
        <div key={el.id}>
          {el.id} : {el.value}
        </div>
      ))}
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        {"<"}{" "}
      </button>

      {/* select method########################################################### */}
      {/* <select onChange={(e)=>setLimit(Number(e.target.value))}>
        <option value= "5">5</option>
        <option value= "10">10</option>
        <option value= "20">20</option>
      </select> */}
      {/* input method############################################### */}
      <input
      type="number"
      value = {limit}
      min ={0}
      max = {totalcount}
      onChange ={(e)=>setLimit(e.target.value)}
      />
      <button disabled ={page*5>=totalcount} onClick={() => setPage(page + 1)}>{">"}</button>

      <Stopwatch/>
    </div>
  );
}

export default App;
