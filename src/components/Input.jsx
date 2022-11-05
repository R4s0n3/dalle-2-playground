import React from 'react'
import './Input.css'
function Input(props) {

  return (
    <div className="form-control w-full">
      <label className="py-1 my-1 text-violet-400">{props.label}</label>
      <input className="text-gray-700 p-2 rounded border-violet-800 border-solid ring-0 border-rounded border-2 placeholder-gray-700 " placeholder={props.placeholder} id={props.id}  />
    </div>
  )
}

export default Input
