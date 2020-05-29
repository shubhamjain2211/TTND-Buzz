import React from 'react';
import './Complaintbox.css';

function Complaintbox() {
  return (
    <div className="Complaintbox">
      <div className="width100 heading">Complaint Box</div>
          <div className="width50"><label>Select Department</label>
            <select>
              <option></option>
              <option>Admin</option>
              <option>Infra</option>
              <option>IT</option>
              <option>HR</option>
            </select>
          </div>
          <div className="width50"><label>Issue Title</label>
            <select>
              <option></option>
              <option>Hardware</option>
              <option>Infrastructure</option>
              <option>Others</option>
            </select>
          </div><br/>
          <div className="width50"><label>Your Name</label>
            <input type="text"/>
          </div>
          <div className="width50"><label>Email Id</label>
            <input type="email"/>
          </div>
          <div className="width100"><label>Your Concern</label>
            <textarea></textarea>
          </div>
          <div className="width75"></div>
          <div className="width25">
            <input className="attachment" type="image" value="Attachment"/>
            <button>Submit</button>
          </div>
    </div>
  );
}

export default Complaintbox;
