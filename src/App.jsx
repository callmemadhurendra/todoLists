import AddTodos from "./component/AddTodoForm";
import Todos from "./component/Todos";
import { useReducer } from "react";

function reducer(todos, action) {
  // if (action.type === "DELETE_TODO") {
  // const newState=[];
  // for(let todo of todos){
  //   if(todo.id !== action.payload.id) {
  //     newState.push(todo);
  //   }

  // }
  // return newState;
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "TOGGLE_COMPLETED") {
    // return todos.map((todo) => {
    //   if (todo.id === action.payload.id) {
    //     return { ...todo, completed: !todo.completed };
    //   } else {
    //     return todo;
    //   }
    // });
    console.log("togelling . .. . ");
    return todos;
  }
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }
  return todos;
}

const initialTodos = [
  { id: "1", title: "teach student", completed: true },
  { id: "2", title: "video editing", completed: false },
  { id: "3", title: "play guitar", completed: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <AddTodos dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;
