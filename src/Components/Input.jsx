import React from 'react'

const Input = props =>{
    return (
        <div className="form">
       <form
       onSubmit={props.submit}
       >
           <input type="text"
           onChange={props.change}
           value = {props.value}
           />
           <button></button>
       </form>
       </div>
    )
}
export default Input;