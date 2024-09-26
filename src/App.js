import React,{useReducer} from "react";
import Form from "./components/Form";
import context from "./components/context/context";
import "./style/styles.css"
import reducer from "./components/reducer";
import Display from "./components/Display";
function App() {
  const [todos,dispatch] = useReducer(reducer,[])
  console.log(useReducer)
  return (
    
    <context.Provider value={{todos,dispatch}}>
      <>
    <h1 className="text-3xl font-bold underline text-center">Notes App</h1>
    <Form/>
    <Display/>
    </>
    </context.Provider>
      
   
  );
}

export default App;
