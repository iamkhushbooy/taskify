'use client'
import React, { useState, useEffect } from 'react';
import Tasklist from '@/app/components/Tasklist';
import { useParams } from 'next/navigation'

const Page = () => {
    const Params = useParams();
    const [data, setData] = useState([]);
    const storedData = [...JSON.parse(localStorage.getItem('data')) || []];
    console.log(storedData);
    const fetchData = () => {
        if (storedData) {
            const d =Params.date
            const formattedDate = d.split('-').reverse().join('/');
            const searchData = storedData.filter(item => item.d.startsWith(formattedDate));
            setData(searchData);

        } else {
            console.log("No data found in local storage");
        }
    };
    const del = (index) => {
        let ques = confirm('do you really want to delete?')
        if (ques) {
            const taskToDelete = data[index];


            let newData = data.filter((item, i) => i !== index);
            setData(newData);


            const updatedStoredData = storedData.filter((item) => (item.title !== taskToDelete.title) && (item.des !== taskToDelete.des));
            localStorage.setItem('data', JSON.stringify(updatedStoredData));
        }
    };
    useEffect(() => {
        fetchData();
    }, [Params.date]);

    return (
        <div className='w-full min-h-screen bg-[rgba(0,0,0,0.9)] flex items-center flex-col'>
            <div id="tasks">
                {data && data.map((item, index) => (
                    <Tasklist
                        key={index}
                        date={item.d}
                        title={item.title}
                        des={item.des}
                        del={() => del(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
