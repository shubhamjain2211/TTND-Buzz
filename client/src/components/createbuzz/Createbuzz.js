import React, { useState } from 'react';
import './Createbuzz.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBuzz } from '../../actions/buzz'; 

const CreateBuzz = ({ addBuzz }) => {
  const [file, setFile] = useState('');
  const [formData , setFormData] = useState({
    text:'',
    category:'',
  });

  const { text,category } = formData; 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = e =>{
    e.preventDefault();
    let formFile = new FormData();
    formFile.append('file', file);
    addBuzz(text,category,formFile);
    setFormData({ text:'', category:''});
    setFile('');
  }

  const onFileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <div className="Createbuzz">
      <div className="heading"><span><i className="fas fa-pen"></i>  Create Buzz</span></div>
        <form onSubmit={e => onSubmit(e)}>
        <div>
          <textarea value={text} name='text' onChange={e =>onChange(e)} 
          placeholder="Share your thought..." required></textarea>
        </div>
        <div className="CreatebuzzSubmit">
          <span>
            <select value={category} name='category' onChange={e =>onChange(e)}>
            <option>Category</option>
            <option>Activity Buzz</option>
            <option>Lost and Found Buzz</option>
          </select>
           <input type="file" name="file" id="file" 
              className="attachment" data-multiple-caption="{count} files selected" 
              onChange={()=>{onFileChangeHandler(window.event)}}/>
           <label htmlFor="file"><i className="fas fa-images"></i> Image</label>
          </span>
          <button><i className="fas fa-chevron-circle-right"></i></button>
        </div>
        </form>
    </div>
  );
}

CreateBuzz.propTypes = {
  addBuzz: PropTypes.func.isRequired
}

export default connect(null, { addBuzz })(CreateBuzz);
