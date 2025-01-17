import React,{useState} from 'react';

function AddTodoForm({dispatch}) {
  const[title,setTitle]=useState("");

  function handleSubmit(e){
    // console.log(title);
    e.preventDefault();
    if(title.trim().length===0){
      alert("type something . . . ");
    }
    const newTodo={
      title:title,
      completed:false,
      id:crypto.randomUUID()
    };
    console.log(newTodo);
    dispatch({type:"ADD_TODO",payload: {newTodo:newTodo}});
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e)=>{setTitle(e.target.value);
        }}
        /> 

        <button type="submit"Add todo>ADD TODOS</button>

    </form>
  );
}
  
export default AddTodoForm;