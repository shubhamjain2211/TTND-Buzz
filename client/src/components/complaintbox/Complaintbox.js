import React, { useState,Fragment } from 'react';
import './Complaintbox.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComplaint } from '../../actions/complaint'; 

const ComplaintBox = ({ addComplaint, auth }) => {
  const [formData, setFormData] = useState({
     text:'', department:'', issueTitle:''
  });

  const { text, department, issueTitle} = formData; 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e =>{
    e.preventDefault();
    console.log("Complaint Box FormData" , formData)
    console.log(text, department, issueTitle);
    addComplaint(text, department, issueTitle);
  }

  return (
    <Fragment>
    <div className="ComplaintBoxHeading">Complaint Box</div>
      <div className="Complaintbox">
        
        <form onSubmit={e => onSubmit(e)}>
          
          <div className="ComplaintBoxDivSmall">
            
            <div><label>Your Name:</label>
            <strong><label className='Name_Email'>{auth.user.name}</label></strong>
            </div>

            <div><label>Email Id:</label>
            <strong><label className='Name_Email'>{auth.user.email}</label></strong>
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

          <div className='SubmitButtonDiv'>
            <div><input className='attachment' type="file" name="file"></input></div>
            <div><button type='submit'>Submit</button></div>
          </div>

        </form>
      </div>
      
    </Fragment>
  );
}
ComplaintBox.propTypes = {
  addComplaint: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addComplaint })( ComplaintBox );