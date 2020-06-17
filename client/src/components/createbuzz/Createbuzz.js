import React, { useState } from 'react';
import './Createbuzz.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBuzz } from '../../actions/buzz'; 

const CreateBuzz = ({ addBuzz }) => {
  const [file, setFile] = useState(null);
  const [formData , setFormData] = useState({
    text:'',
    category:''
  });

  const { text,category } = formData; 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = e =>{
    e.preventDefault();
    let formFile = new FormData();
    formFile.append('file', file);
    addBuzz(text,category,formFile);
  }

  const onFileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <div className="Createbuzz">
      <div className="heading"><span><i className="fas fa-pen"></i>  Create Buzz</span></div>
        <form onSubmit={e => onSubmit(e)}>
        <div>
          <textarea value={text} name='text' onChange={e =>onChange(e)} placeholder="Share your thought..."></textarea>
        </div>
        <div className="CreatebuzzSubmit">
          <span>
            <select value={category} name='category' onChange={e =>onChange(e)}>
            <option>Category</option>
            <option>Activity Buzz</option>
            <option>Lost and Found Buzz</option>
          </select>
          <input className='attachment' type="file" name="file" onChange={()=>{onFileChangeHandler(window.event)}}></input>
          </span>
          <button><i className="fas fa-caret-right"></i></button>
        </div>
        </form>
    </div>
  );
}

CreateBuzz.propTypes = {
  addBuzz: PropTypes.func.isRequired
}

export default connect(null, { addBuzz })(CreateBuzz);
