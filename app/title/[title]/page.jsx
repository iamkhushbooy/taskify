'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import Tasklist from '@/app/components/Tasklist'
import { useParams } from 'next/navigation'
const page = () => {
    let params = useParams();
    let [data, setData] = useState([]);
    let Show = () => {
        let title=params.title
        let wholedata=JSON.parse(localStorage.getItem('data'))
        let searchdata=wholedata.filter((item,index)=>(
            title===item.title
        ))
        console.log(searchdata);
        setData(searchdata)
    }
    useEffect(() => {
        Show()
    }, [params])
    const del = (i) => {
        const newarray = data.slice().reverse().filter((item, index) => (
            i !== index
        ))
        localStorage.setItem("data", JSON.stringify(newarray))
        setData(newarray)
    }

    return (
        <>
            <div className='w-full min-h-screen bg-[rgba(0,0,0,0.9)] flex justify-around items-center flex-col'>
                <div id="tasks">
                    {data && data.slice().reverse().map((item, index) => (
                        <Tasklist key={index} date={item.d} task={item.task} title={item.title} des={item.des} del={() => del(index)} />
                    ))}
                </div>
            </div>
        </>

    )
}

export default page