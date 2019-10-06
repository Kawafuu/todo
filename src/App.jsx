import React, {useState} from 'react';
import './App.css';
import Input from './Components/Input'

const App = () =>{
  const[todos, setTodos] = useState([])
  const[input, setInput] = useState("")
  const onSubmitHandler = e =>{
    e.preventDefault()
    if(input!==''){
   setTodos([{todo:input, done:'false', key:Date.now()} ,...todos])
   setInput("")
    }
    console.log(todos)
  }
  const onChangeHandler = e =>{
    e.preventDefault()
    setInput(e.target.value)
  }
  const handleTodoClick = (e)=>{
    if(e.target.className ==='clicked'){
      e.target.className =''
    } 
    else{
      e.target.className = 'clicked'
    }
  }
  return (
    <div className="App">
      <div className="todo-wrapper">
        <h1>Enter Your todos...</h1>
          <Input value={input} change ={onChangeHandler} submit={onSubmitHandler}></Input>
          {todos.map(todo =>{
          return (<ul onClick={handleTodoClick} key={todo.key}>{todo.todo}</ul>);
          })}
      </div>
    </div>
  );
}

export default App;