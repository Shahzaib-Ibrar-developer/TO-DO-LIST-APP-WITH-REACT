"use client"
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const FormSubmitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setDesc("")
    setTitle("")
    console.log(mainTask)
  }

  const deleteHandler=(i)=>{
let copyTask = [...mainTask]
copyTask.splice(i,1);
setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key ={i} className="lineDirection mb-3" >
          <div className="mainDiv flex justify-between mb-5 w-2/3">
          <h5 className="titletext 2xl  font-semibold">{t.title}</h5>
          <h4 className="desctext lg  font-semibold">{t.desc}</h4>
          <button className="deleteButton bg-red-500 p-2 text-white rounded" onClick={()=>{
            deleteHandler(i)
          }}>Delete</button>
          </div>

        </li>
      )
    });
  }
  
  return (
    <>

      <h1 className="first-heading flex justify-center text-white font-bold text-4xl p-5 bg-black"  >ToDo List App</h1>
      <form onSubmit={FormSubmitHandler}>
        <input className="border  border-black-1000 border-solid rounded-md mx-3 my-5 p-2 " placeholder="Enter title here" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }}></input>
        <input className="border border-black-1000 border-solid rounded-md mx-3 my-5 p-2 " placeholder="Enter description here" value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }} ></input>
        <button className="btn p-2 rounded-md text-white bg-black" >Add Task</button>
      </form>
      <hr className="horizontal-line my-5"></hr>

      <div className="space p-5 bg-slate-400">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
export default page