import React from 'react'
import Addproject from './Addproject'

function Myproject() {
  return (
    <div className='card shadow p-4'>
        <div className='d-flex justify-content-between'>
            <h3 className='text-success'>My Project</h3>
            <Addproject/>

        </div>
        <div className='mt-4'>
            <div className='border d-flex align-items-center p-3 rounded'>
                <h5>Project Title</h5>
                <div className='ms-auto d-flex'>
                    <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>

                    <button className='btn'><i class="fa-brands fa-github"></i></button>


                    <button className='btn'><i class="fa-solid fa-trash"></i></button>



                </div>

            </div>
            <p className='text-danger fw-bolder fs-4'>NO project uploaded yet</p>

        </div>

    </div>
  )
}

export default Myproject