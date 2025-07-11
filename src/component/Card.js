import React, { use, useEffect, useState } from 'react'
import ReactStarts from 'react-stars';
import { getDocs } from 'firebase/firestore';
import { moviesCollection } from '../firebase/firebase';
const Card = () => {
    const [data,setdata]=useState([]);
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        async function fetchData() {
setloading(true);
const response = await getDocs(moviesCollection);
response.forEach((doc) => {
    setdata((prev)=> [...prev, doc.data()]);
});
setloading(false);

        }
        fetchData();
        
    },[]);
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {loading ? "..." : 
        data.map((item,index)=>{

            return (
                <div key={index} className='bg-slate-900 text-white p-3 rounded-lg shadow-lg m-2 hover:translate-y-2 cursor-pointer mt-6 transition-all duration-500 '>
                    <img className="h-62 md:h-72 w-60" src={item.image}></img>
                    <h1>{item.name}</h1>
                    <h1 className='flex items-center'>
                    <span className='mr-2'>Rating:</span>
                        <ReactStarts 
                        size={20}
                        value={5}
                        edit={false}
                        />
                    </h1>
                    <h1>Release Date: {item.year}</h1>
                    <p className='text-sm'>{item.description}</p>
                </div>
            )
        })}
        </div>

        

  )
}


export default Card
