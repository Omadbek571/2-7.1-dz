import React, { useState } from 'react'
import menu from "./imges/menu.png"
import elipses from "./imges/elipses.png"
function ToDoList() {

  const [nameinp, setNameinp] = useState("")
  const [descinp, setDescinp] = useState("")
  const [depositinp, setDepositinp] = useState("")
  const [status, setStatus] = useState("active")

  const [tasks, setTasks] = useState([])


  function handleInputName(e) {
    setNameinp(e.target.value)

  }

  function handleInputDesc(e) {
    setDescinp(e.target.value)
  }
  function handleInputDeposit(e) {
    setDepositinp(e.target.value)
  }

  function handleValue(e) {
    setStatus(e.target.value)

  }

  function addTask() {
    const newTask = {
      name: nameinp,
      description: descinp,
      deposit: depositinp,
      status: status,
    };

    setTasks([...tasks, newTask])
    console.log(tasks);

  }

  function handleDelete(index) {
    const updateTask = tasks.filter(function (task, i) {
      return i !== index
    })

    setTasks(updateTask)
  }



  return (
    <div className='border-2 max-w-1020 flex flex-col mx-auto p-2 rounded-md text-black'>
      <div className='flex justify-between'>
        <div className='flex gap-5'>
          <img className='w-10 h-15' src={menu} alt="menu-burger" />
          <input type="text" placeholder='Search' className='bg-slate-300 
        placeholder:text-black border-2 rounded-md p-2 w-80 text-2xl' />
        </div>
        <button className="btn bg-blue-600 text-2xl text-white border-none" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Customer</button>
      </div>
      <div className='flex justify-between text-2xl text-slate-500 mt-4  items-center'>
        <div className='flex gap-2'>
          <input type="checkbox" className="w-[25px] bg-transparent" />
          <h2>NAME</h2>
        </div>
        <h2>DESCRIPTION</h2>
        <h2>RATE</h2>
        <h2>BALANCE</h2>
        <h2>DEPOSIT</h2>
        <h2>STATUS</h2>
        <img src={elipses} alt="elipses" className='w-14' />
      </div>
      <div>
        {
          tasks.map(function (task, index) {
            return (
              <div key={index} className='flex justify-between text-xl mt-2 items-center font-semibold'>
                <div className='flex gap-2'>
                <input type="checkbox" className="w-[25px] bg-transparent" />
                <div className='flex flex-col justify-center items-center'>
                <h2>{task.name}</h2>
                <h6 className='text-slate-500 text-sm'>5684236583</h6>
                </div>
                </div>
                <h2>{task.description}</h2>
                <div className='flex flex-col justify-center items-center '>
                <h2>70.00</h2>
                <h3 className='text-slate-500 text-sm'>INR</h3>
                </div>
                <div className='flex flex-col justify-center items-center '>
                <h2 className='text-green-500'>270.00</h2>
                <h3 className='text-slate-500 text-sm'>INR</h3>
                </div>

                <div>
                <h2>{task.deposit}</h2>
                <h3 className='text-slate-500 text-sm'>INR</h3>
                </div>
                <h2 className='bg-blue-600 pt-0 px-3 text-white rounded-xl'>{task.status}</h2>

                <button onClick={() => handleDelete(index)} className='p-2 bg-red-500 text-white rounded-md'>delete</button>
              </div>
            )
          })
        }
      </div>

      {/* madalka */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg text-black">Yozing</h3>
            <div className="modal-action">
              <form method="dialog">
                <div className="space-y-4">
                  <input
                    onChange={handleInputName}
                    value={nameinp}
                    type="text"
                    placeholder="Enter Name..."
                    className="input input-bordered w-full p-2 border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    onChange={handleInputDesc}
                    value={descinp}
                    type="text"
                    placeholder="Enter Description..."
                    className="input input-bordered w-full p-2 border-gray-300 rounded-lg bg-white text-black"
                  />
                  <input
                    onChange={handleInputDeposit}
                    value={depositinp}
                    type="text"
                    placeholder="Enter Deposit..."
                    className="input input-bordered w-full p-2 border-gray-300 rounded-lg bg-white text-black"
                  />
                  <select
                    onChange={handleValue}
                    value={status}
                    className="select select-bordered w-full p-2 border-gray-300 rounded-lg bg-white text-black"
                  >
                    <option value="inactive">inactive</option>
                    <option value="active">active</option>
                  </select>
                </div>
                <button onClick={addTask} className="btn bg-black text-white p-2 mt-4 rounded-lg hover:bg-gray-800">
                  SAVE
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* madalka */}
    </div>
  )
}

export default ToDoList