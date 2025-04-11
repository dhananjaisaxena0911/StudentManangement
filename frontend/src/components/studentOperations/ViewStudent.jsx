import React from 'react'

export default function ViewStudent() {
  return (
    <div>

    <div className='flex justify-center align-middle h-[90vh] items-center '>
    <div className="flex flex-col items-center mt-8 border border-black rounded-2xl p-9">
      <h2 className="text-2xl font-bold mb-4">VIEW STUDENT</h2>
      <form className="space-y-4 w-96">
        <div>
          <label htmlFor="ROLL NO." className="block text-sm font-medium text-black">
            Roll number<sup className="text-red-500 text-l">*</sup>
          </label>
          <input
            type="number"
            id="ROLL NO." 
            name="Roll number" required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Enter your roll number"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700"
          >
            Submit
          </button>

        </div>
        <div>
          <button
          type='button'
          className='bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-700'
          onClick={()=>{
            //Add View All Logic
            //adding temporary alert box
            alert("View All Students Clicked!!");
          }}>
            View All
          </button>
        </div>
        </form>
    </div>
    </div>
    </div>
  )
}
