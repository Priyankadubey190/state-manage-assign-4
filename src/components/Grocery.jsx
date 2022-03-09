import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList} from "./GroceryList";
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
   }
   function deleteitem(id){
    const x=  grocerys.filter((ele)=>{
         return ele.id!==id
      })
      setTodos(x)
  }
    return (
    <div>
        <GroceryInput handleAdd={addTodo} />
        {grocerys.map((e) =>(
        <GroceryList groce={e} key={e.id} deleteitem={deleteitem} />
        ))}
        </div>
    );
};