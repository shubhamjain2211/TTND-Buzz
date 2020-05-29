import React from 'react';
import './Createbuzz.css';

function CreateBuzz() {
  return (
    <div className="Createbuzz">
      <div className="heading"><span><i class="fas fa-pen"></i>  Create Buzz</span></div>
        <div>
          <textarea placeholder="Share your thought..."></textarea>
        </div>
        <div className="CreatebuzzSubmit">
          <span>
            <select>
            <option>Category</option>
            <option>Activity Buzz</option>
            <option>Lost and Found Buzz</option>
          </select>
          <input className="attachment" value=" " type="image"/>
          </span>
          <button><i class="fas fa-caret-right"></i></button>
        </div>
    </div>
  );
}

export default CreateBuzz;
