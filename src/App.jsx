import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  function handleDec() {
    setCount(count - 1);
  }
  return (
    <>
      <div className='w-[450px] mt-10 mx-auto bg-[#80abd6] p-5 border-2 border-solid border-black rounded-lg'>
        <h1 className='text-center text-4xl text-amber-950'>Counter App</h1>
        <h2 className={`text-center text-4xl ${count > 0 ? "text-green-700" : (count < 0) ? "text-red-600" : "text-slate-600"}`}>{count}</h2>
        <div className="buttons flex justify-center items-center gap-3 mb-4">
          <button onClick={handleDec} className='px-5 py-2 bg-red-500 text-lg text-white border-2 border-solid border-red-800 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer'>Decrease</button>
          <button onClick={() => { setCount(0) }} className='px-5 py-2 bg-[#4E5166] text-lg border-2 border-solid border-gray-800 text-white rounded-lg font-semibold hover:bg-[#47495e] transition cursor-pointer'>Reset</button>
          <button onClick={() => { setCount(count + 1) }} className='px-5 py-2 bg-green-500 text-lg border-2 border-solid border-green-800 text-white rounded-lg font-semibold hover:bg-green-600 transition cursor-pointer'>Increase</button>
        </div>
      </div>
    </>
  )
}

export default App