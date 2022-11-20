import React from 'react'

const PricingTag = props => {


  return (
    <div id={props.id} className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border hover:text-violet-600 focus:border-violet-500 cursor-pointer rounded-xl">
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-200 focus:text-violet-600 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>

      <div className="flex flex-col items-center mx-5 space-y-1">
        <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">{props.title}</h2>

      </div>
    </div>

    <h2 className="text-2xl font-semibold text-gray-200  focus:text-violet-600 sm:text-4xl">{props.price}€<span className="text-base focus:text-violet-600 font-medium">{props.cycle}</span></h2>
  </div>
  )
}

export default PricingTag