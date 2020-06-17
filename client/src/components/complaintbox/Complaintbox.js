import React, { useState,Fragment } from 'react';
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
    console.log("Complaint Box FormData" , formData)
    console.log(text, department, issueTitle, issueId, lockedBy, assignedTo, name, status,email);
    addComplaint(text, department, issueTitle, issueId, lockedBy, assignedTo, name, status,email);
  }

  return (
    <Fragment>
    <div className="ComplaintBoxHeading">Complaint Box</div>
      <div className="Complaintbox">
        
        <form onSubmit={e => onSubmit(e)}>
          
          <div className="ComplaintBoxDivSmall">
            
            <div><label>Your Name</label>
              <input type="text" value={name} name='name' onChange={e =>onChange(e)} />
            </div>

            <div><label>Email Id</label>
              <input type="email"  value={email} name='email' onChange={e =>onChange(e)}/>
            </div>
            
            <div>
              <label>Select Department</label>
              <select value={department} name='department' onChange={e =>onChange(e)}>
                <option></option>
                <option>Admin</option>
                <option>Infra</option>
                <option>IT</option>
                <option>HR</option>
            </select>
          </div>

          <div>
            <label>Issue Title</label>
            <select value={issueTitle} name='issueTitle' onChange={e =>onChange(e)}>
              <option></option>
              <option>Hardware</option>
              <option>Infrastructure</option>
              <option>Others</option>
            </select>
          </div>

        </div>

          <div>
            <textarea value={text} name='text' placeholder="Your Concern" onChange={e =>onChange(e)}></textarea>
          </div>

          <div></div>
          <div>
            <input className="attachment" type="image" value="Attachment"/>
            <button type='submit'>Submit</button>
          </div>

        </form>
      </div>
      
    </Fragment>
  );
}
ComplaintBox.propTypes = {
  addComplaint: PropTypes.func.isRequired
}

export default connect(null, { addComplaint })( ComplaintBox );