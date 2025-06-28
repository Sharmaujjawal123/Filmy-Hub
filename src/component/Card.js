import React, { use, useState } from 'react'
import ReactStarts from 'react-stars';
const Card = () => {
    const [data,setdata]=useState([
        {
            name: "Avenger",
            rating: 5,
            releaseDate: "2012",
            image: "https://wallpapercat.com/w/middle-retina/7/1/4/32399-3840x2160-desktop-4k-avengers-wallpaper.jpg"
        },
        {
            name: "Avenger",
            rating: 4,
            releaseDate: "2012",
            image: "https://wallpapercat.com/w/middle-retina/7/1/4/32399-3840x2160-desktop-4k-avengers-wallpaper.jpg"
        },
        {
            name: "Avenger",
            rating: 1,
            releaseDate: "2012",
            image: "https://wallpapercat.com/w/middle-retina/7/1/4/32399-3840x2160-desktop-4k-avengers-wallpaper.jpg"
        }
    ]);
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
        {data.map((item,index)=>{
            return (
                <div key={index} className='bg-slate-900 text-white p-3 rounded-lg shadow-lg m-2 hover:translate-y-2 cursor-pointer mt-6 transition-all duration-500 '>
                    <img className="h-72 w-60" src={item.image}></img>
                    <h1>{item.name}</h1>
                    <h1 className='flex items-center'>
                    <span className='mr-2'>Rating:</span>
                        <ReactStarts 
                        size={20}
                        value={item.rating}
                        edit={false}
                        />
                    </h1>
                    <h1>Release Date: {item.releaseDate}</h1>
                </div>
            )
        })}
        </div>

        

  )
}

export default Card
