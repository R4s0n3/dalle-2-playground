import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div style={{cursor:"pointer",pointerEvents: "auto"}}> 
        <button id={props.id} style={{cursor:"pointer"}} onClick={props.onClick} className={"p-2 my-2 mr-2 cursor-pointer bg-slate-200 dark:bg-slate-600 rounded text-gray-600 dark:text-gray-300 hover:bg-slate-400 hover:dark:bg-slate-700 hover:scale-95 " + props.className} type={props.type || "button"} disabled={props.disabled} >
         {props.children}
        </button>
    </div>
  )
}

export default Button