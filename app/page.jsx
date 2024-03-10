'use client'
import React, { useState, useEffect } from 'react';
import Tasklist from './components/Tasklist';

const Page = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [data, setData] = useState([]);

  const save = () => {
    let d = new Date();
    let options = { year: 'numeric', month: '2-digit', day: '2-digit',hour:'numeric',minute:'numeric',second:'numeric',hour12:true,timeZone: 'Asia/Kolkata' };
    let formatter = new Intl.DateTimeFormat('en-IN', options);
    let formattedDate = formatter.format(d);
    const newData = { d: formattedDate, title, des }
    if (title && des) {
      if (localStorage.getItem('data')) {
        let updatedData = [...data, newData]
        localStorage.setItem('data', JSON.stringify(updatedData))
        setData(updatedData)
      }
      else {
        setData([newData])
        localStorage.setItem('data', JSON.stringify([newData]))
      }
    }
    else {
      alert('Please Write title and description both')
    }
    setTitle('')
    setDes('')
  }

  const deleteAll = () => {
    const shouldDelete = window.confirm('Do you really want to delete?');
    if (shouldDelete) {
      localStorage.removeItem("data");
      setData([]);
    }
  };

  const deleteTask = (index) => {
    const newData = data.filter((item, i) => i !== index);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  return (
    <>
      <div className='w-full min-h-screen bg-[rgba(0,0,0,0.9)] flex items-center flex-col'>
        <div className='w-[350px] h-[270px] border border-blue-500 rounded  flex justify-around items-center flex-col m-5'>
          <div className=' w-[260px] flex justify-between items-center'>
          
          </div>
          <input
            type="text"
            placeholder='title'
            className='w-[260px] h-[40px] rounded text-center'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='description'
            className='w-[260px] min-h-[60px] rounded text-center resize-none'
            value={des}
            onChange={e => setDes(e.target.value)}
          ></textarea>
          <button className='w-[260px] h-[40px] rounded bg-blue-300 white font-bold' onClick={save}>Save</button>
          <button className={`w-[260px] h-[30px] rounded bg-blue-300 ${data.length ? '' : 'cursor-not-allowed'}`} onClick={deleteAll}>Clear Taskify</button>
        </div>
        <div id="tasks">
          {data.map((item, index) => (
            <Tasklist
              key={index}
              date={item.d}
              title={item.title}
              des={item.des}
              del={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Page;
