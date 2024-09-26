import React,{useContext} from 'react'
import context from './context/context'

export default function Display() {
    const {todos,dispatch} = useContext(context) 
  return (
    <div>
        {
            todos.map((e)=>(
                <div>
                    <h1>{e}</h1>
                </div>
            ))
        }
    </div>
  )
}
