import { GroceryInput } from "./GroceryInput";
import { GroceryList} from "./GroceryList";
import { useEffect,useState } from "react";
import axios from "axios";
import {nanoid} from "nanoid";
export const Grocery = ()=> {
   const [grocerys,setTodos] = useState([]); 
   const addTodo = (data) => {
    const t = {
        id: nanoid(),
        title: data,
        status: false,
        
    }
       setTodos([...grocerys,t]);
       fetch('http://localhost:3001/groceries',{
                method: "POST",
                body: JSON.stringify(t),
                headers: {
                  "content-type": "application/json",
                },
              }).then(()=>{
                getData();
              });
//     axios.post("http://localhost:3001/groceries", t).then(function(response){
//     console.log('response: ', response.data)
// }).catch(function(er){
//     console.log('error: ', er)
// })
   }
   function deleteitem(id){
    const x=  grocerys.filter((ele)=>{
         return ele.id!==id
      })
      setTodos(x)
  }
  const [groceries, setGroceries] = useState([]);
 const [page,setPage] = useState(1);
 useEffect(()=>{
   getData();
   },[page]);
 
 const getData = () => {
  axios.get(`http://localhost:3001/groceries?_limit=3&_page=${page}`).then((res)=>{
      console.log(res.data);
    setGroceries(res.data);
 });
 };

 const  handlechange=(v)=>{
     
    if(page+v>0){
       setPage(page+v)
    }
  }
    return (
    <div>
        <GroceryInput handleAdd={addTodo} />
        {groceries.map((e) =>(
        <GroceryList groce={e} key={e.id} deleteitem={deleteitem} />
        ))}
        {/* {groceries.map((g)=>(
              <div key={g.id}>{g.title}</div>
            ))} */}
            <button onClick={()=>{
                 handlechange(-1)
            }}>Prev</button>
            <button onClick={()=>{
                handlechange(1)
            }}>Next</button>
            {/* <button onClick={()=>{
              setPage(page+1);
            }}>Next</button> */}
        </div>
    );
};