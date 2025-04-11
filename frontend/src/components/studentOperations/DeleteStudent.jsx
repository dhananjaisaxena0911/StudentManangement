import React from 'react'

export default function DeleteStudent() {
  return (
    <div>
      
      <div className='flex justify-center align-middle h-[90vh] items-center'>
    <div className="flex flex-col items-center mt-8 ">
      <h2 className="text-2xl font-bold mb-4">DELETE STUDENT</h2>
      <form className="space-y-6 w-96">
        <div>
          <label htmlFor="roll no." className="block text-sm font-medium text-black">
            Roll number<sup className="text-red-500 text-l">*</sup>
          </label>
          <input
            type="number"
            id="roll no." 
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
        </form>
    </div>
    </div>
    </div>
  )
}
