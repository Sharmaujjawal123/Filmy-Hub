import React, { use, useState } from 'react'
import {PacmanLoader} from 'react-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesCollection } from '../firebase/firebase';
import swal from 'sweetalert';
const AddMovie = () => {
const [form,setForm]=useState({
name: "",
year: "",
description: "",
image:""
})
const [loading,setloading]=useState(false);

const addMovie =async()=>{
  try{
    setloading(true);
    await addDoc(moviesCollection,form);
    swal({
      title: "Success",
      text: "Movie added successfully!",
  icon: "success",
  button: "OK",
  timer: 2000,
});
  }catch(err){
    swal({
      title: "Error",
      text: "Failed to add movie!",
      icon: "error",
      button: "OK",
      timer: 2000,
    });
  }finally{
    setloading(false);
  }
}
  return (
    <div>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-blue-500 ">Add Movie</h1>

    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name </label>
            <input type="text"
             id="name"  name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="year" className="leading-7 text-sm text-gray-600">Year</label>
            <input type="text" id="year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} name="year" className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="image" className="leading-7 text-sm text-gray-600">Image</label>
            <input type="text" id="image" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} name="image" className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button  onClick={addMovie} className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-900 rounded text-lg">
            {loading ? "..." : "ADD"}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default AddMovie;
