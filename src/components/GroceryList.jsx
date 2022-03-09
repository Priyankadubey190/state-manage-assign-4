export const GroceryList = ({groce,deleteitem})=>{
    return (
        <>
        <div>{groce.title} <button onClick={()=>(deleteitem(groce.id))}>Delete</button></div>
        
        </>
    
    )
}