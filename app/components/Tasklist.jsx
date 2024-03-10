import React from 'react'

const Tasklist = ({ date, title, des, del }) => {
    return (
        <div className='w-[350px] min-h-[150px] flex justify-around items-center flex-col text-blue-200 mb-10  bg-slate-800 rounded-lg'>
            <div className='min-w-[250px] flex justify-around items-center text-blue-300'>
                <p className='font-bold'> Date:</p>
                <p className='text-[#cccccc]'>{date}</p>
            </div>
            <div className="title flex text-blue-300">
                <p className='w-[50px]  font-bold'>Title:</p>
                <p className='text-[#cccccc]'>{title}</p>
            </div>
           <div className=" w-[100%] min-h-[100px] title flex justify-center items-center text-blue-300 flex-col">
                <p className='font-bold'>Description:</p>
                <p className='text-[#cccccc] text-justify px-5 py-2'>{des}</p>
            </div>
            <button onClick={del} className='w-[100px] h-[30px] bg-red-400 rounded text-black'>Delete</button>
        </div>
    )
}

export default Tasklist
