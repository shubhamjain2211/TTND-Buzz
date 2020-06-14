import React, { useState } from 'react';
import './Complaintbox.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComplaint } from '../../actions/complaint'; 

const ComplaintBox = ({ addComplaint }) => {
  const [formData, setFormData] = useState({
    email:'', text:'', department:'', issueTitle:'', issueId:'', lockedBy:'', assignedTo:'', status:'',name:''
  });

  const { text, department, issueTitle, issueId, lockedBy, assignedTo, status,name,email } = formData; 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e =>{
    e.preventDefault();
    console.log("====================" , formData)
    console.log(text, department, issueTitle, issueId, lockedBy, assignedTo, name, status,email);
    addComplaint(text, department, issueTitle, issueId, lockedBy, assignedTo, name, status,email);
  }

  return (
    <div className="Complaintbox">
      <div className="width100 heading">Complaint Box</div>
      <form onSubmit={e => onSubmit(e)}>
          <div className="width50"><label>Select Department</label>
            <select value={department} name='department' onChange={e =>onChange(e)}>
              <option></option>
              <option>Admin</option>
              <option>Infra</option>
              <option>IT</option>
              <option>HR</option>
            </select>
          </div>
          <div className="width50"><label>Issue Title</label>
            <select value={issueTitle} name='issueTitle' onChange={e =>onChange(e)}>
              <option></option>
              <option>Hardware</option>
              <option>Infrastructure</option>
              <option>Others</option>
            </select>
          </div>
          <div className="width50"><label>Your Name</label>
            <input type="text" value={name} name='name' onChange={e =>onChange(e)} />
          </div>
          <div className="width50"><label>Email Id</label>
            <input type="email"  value={email} name='email' onChange={e =>onChange(e)}/>
          </div>
          <div className="width100"><label>Your Concern</label>
            <textarea value={text} name='text' onChange={e =>onChange(e)}></textarea>
          </div>
          <div className="width75"></div>
          <div className="width25">
            {/* <input className="attachment" type="image" value="Attachment"/> */}
            <button type='submit'>Submit</button>
          </div>
        </form>
    </div>
  );
}
ComplaintBox.propTypes = {
  addComplaint: PropTypes.func.isRequired
}

export default connect(null, { addComplaint })( ComplaintBox );