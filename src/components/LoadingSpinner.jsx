import React from 'react'
import './LoadingSpinner.css'
const LoadingSpinner = () => {
    let boxes = ['1','2','3']
   
  return (<div className="text-center">

    <div className="flex justify-center items-center border-2 border-violet-800 p-6">
      
{boxes.map((b,i )=> <div key={i} className={"w-2 animate-pulse h-2 mx-1 block bg-violet-400 loading-span animation-delay-" + i  } ></div>)}
      
    </div>
        <p className="my-2">Generating Image...</p>
  </div>
  )
}

export default LoadingSpinner