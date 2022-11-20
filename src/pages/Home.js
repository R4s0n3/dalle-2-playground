import React from 'react'

const Home = () => {
  return (
    <div>

    <div id="demo" className="bg-gray-200 dark:bg-slate-900">
        
        
    </div>
    {/* PRICING SECTION     */}
    <div id="pricing" className="bg-gray-200 dark:bg-slate-900">
      <div class="container px-6 py-8 mx-auto">

        <p class="text-xl text-center text-gray-500 dark:text-gray-300">
          Choose your plan
        </p>

        <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Pricing Plan</h1>

        <div className="mt-6 space-y-8 xl:mt-12">

          <div className="flex justify-center">
            <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-violet-600 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-500 focus:ring focus:ring-violet-300 focus:ring-opacity-80">
              Choose Plan
            </button>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Home