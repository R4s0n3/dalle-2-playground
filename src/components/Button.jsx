import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button className="p-2 my-2 bg-slate-600 rounded  text-gray-300  hover:bg-slate-700 hover:scale-95 " type={props.type || "button"}>
         {props.children}
        </button>
    </div>
  )
}

export default Button