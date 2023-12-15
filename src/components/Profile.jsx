import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'; // Assuming you have Bootstrap properly set up

function Profile() {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className='card shadow p-5'>
      <div className='d-flex justify-content-between'>
        <h3>profile</h3>
        <button onClick={toggleCollapse} className='btn btn-primary rounded'>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>
      {/* Use the Collapse component to wrap the collapsible content */}
      <Collapse in={open}>
        <div className='row justify-content-center'>
          <label htmlFor="">
            <input id='profile' type="file" style={{ display: "none" }} />
            <img
              width={'200px'}
              height={'200px'}
              src="data:image/png;base64,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"
              alt="no image"
            />
          </label>
          <div className='mb-3 mt-4'>
            <input type="text" placeholder='GitHub' className='form-control' />
          </div>
          <div className='mb-3 mt-4'>
            <input type="text" placeholder='LinkedIn' className='form-control' />
          </div>
          <div className='mb-3'>
            <button className='btn btn-success rounded w-100'>Update</button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Profile;
