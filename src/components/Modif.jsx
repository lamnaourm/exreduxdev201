import React from 'react'
import { useDispatch } from 'react-redux'

export default function Modif() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch({type:'INC', payload:2})}>Incrementer</button>
        <button onClick={() => dispatch({type:'DEC', payload:3})}>Decrementer</button>
        <button onClick={() => dispatch({type:'INI', payload:33})}>Initialiser</button>
    </div>
  )
}
