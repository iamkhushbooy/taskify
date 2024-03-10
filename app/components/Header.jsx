'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const Header = () => {
    const router = useRouter();
    const [searchoption, setSearchoption] = useState(false)
    const [bydate, setBydate] = useState(false)
    const [bytitle, setBytitle] = useState(false)
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    return (
        <div className='w-full  bg-slate-400 h-20 flex justify-between items-center flex-col'>
            <h1 className='w-full font-bold h-8 text-center text-[25px]'>Taskify</h1>
            <div className='w-full h-[60%] flex justify-center items-center'>
                <button onClick={() => 
                {
                    setSearchoption(!searchoption);
                    setBydate(false)
                    setBytitle(false)
                }} className='text-blue-800 border-[1px] border-blue-800 p-1 mr-3 rounded-lg'>Find Task</button>
                {
                    searchoption &&
                    <>
                        {!bytitle && <button onClick={() => setBydate(!bydate)} className='text-blue-800 border-[1px] border-blue-800 p-1 mr-3 rounded-lg'>By Date</button>}
                        {bydate && <>
                            <input value={date} onChange={e => setDate(e.target.value)} type="date" className='w-[200px] p-1 rounded-md bg-slate-400 border border-green-800 text-green-800' />
                            <button onClick={() => router.push(`/search?date=${date}`)} className='p-1 text-green-800 border border-green-800 rounded-lg ml-3'>Search</button></>}
                        {!bydate && <button onClick={() => {
                            setBytitle(!bytitle);
                        }
                        } className='text-blue-800 border-[1px] border-blue-800 p-1 mr-3 rounded-lg'>By Title</button>}
                        {bytitle && <>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='search by title' value={title} className='w-[200px] p-1 text-center rounded-md bg-slate-400 border border-green-800 text-green-800' />
                            <button onClick={() => {
                                router.push(`/search?title=${title}`);
                            }} className='p-1 rounded-lg ml-3 text-green-800 border border-green-800 '>Search</button></>}

                    </>
                }
            </div>
        </div>
    )
}

export default Header