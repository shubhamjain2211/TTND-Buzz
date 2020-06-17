import React,{ Fragment,useState } from 'react';
import PropTypes from 'prop-types';
import './profile.css';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile }) =>{
    const [formData, setFormData] = useState({
        company:'To The New',
        status:'',
        department:''
    });

    const {
        status, 
        department
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{
        e.preventDefault();
        createProfile(formData);
    };

    return(
        <Fragment>
            <form onSubmit={e => onSubmit(e)}>
            <div className=""><label><strong>Select Status:</strong></label>
            <select name='status' value={status} onChange={e => onChange(e)}>
              <option></option>
              <option>Employee</option>
              <option>Admin</option>
            </select>
          </div>
          <div className=""><label><strong>Select Department:</strong></label>
            <select name='department' value={department} onChange={e => onChange(e)}>
              <option></option>
              <option>Development</option>
              <option>Admin</option>
              <option>Infra</option>
              <option>IT</option>
              <option>HR</option>
            </select>
          </div>
          <input type='submit' value='Submit' className='CreateProfileButton'/>
          </form>
        </Fragment>
    )
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(CreateProfile);