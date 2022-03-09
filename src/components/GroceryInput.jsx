import { useState } from "react";

export const GroceryInput = ({handleAdd}) => {
 const [text,setText] = useState("");
    return (
        <div>
            <input type="text" onChange={(e)=>{
              console.log("Value", e.target.value);
              setText(e.target.value);
            }} />
            <button onClick={()=>{
              handleAdd(text)
            }}>
            Add todo
            </button>
        </div>
    );
};