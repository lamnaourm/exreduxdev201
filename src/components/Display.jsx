import React from 'react'
import { useSelector } from 'react-redux'

export default function Display() {

    const compteur = useSelector(state => state.compteur);
  return (
    <div> <h1>{compteur}</h1> </div>
  )
}
