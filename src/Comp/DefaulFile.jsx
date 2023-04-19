import React from 'react';
import { Link } from 'react-router-dom';

const DefaulFile = () => {
  return (
   <>
     <div className='mt-5 mb-5'>
      <h5 className='bg-light'>Assessment test for Sr. JavaScript Developer Role</h5>
    </div>
    <hr />
    
    <div className='d-flex justify-content-center'>
    <div className='ms-5 mt-3 '>
        <h3>Task 1</h3>

 <Link to={'first'} className='mt-5 ms-2'>
 <button className='btn-info'>click me</button>
 </Link>
       
    </div>
    <div className='ms-5 mt-3'>
        <h3>Task 2</h3>

 <Link to={'second'} className='mt-5 ms-2'>
 <button className='btn-primary'>click me</button>
 </Link>
       
    </div>
    </div>
   </>
  );
}

export default DefaulFile;
