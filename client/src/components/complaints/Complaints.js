import React,{Fragment,useEffect} from 'react';
import './Complaints.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getComplaints, getOpen, getProgress, getResolved } from '../../actions/complaint';
import SingleComplaint from './SingleComplaint';
import ComplaintBox from '../complaintbox/Complaintbox';

const Complaints = ({ getComplaints, getOpen, getProgress, getResolved, complaint: {complaints, loading} }) => {
  
  useEffect(() => {
    getComplaints();
  }, [getComplaints]);

  const onChange = e => {
    if(e.target.value==='Open')
      getOpen();
    else if(e.target.value==='In-Progress')
      getProgress();
    else if(e.target.value==='Resolved')
      getResolved();
    else getComplaints();
  };
  
  return (
    loading? <Spinner/> :
    <Fragment>
      <ComplaintBox />
      <div className='YourComplaints'>
        <span><i className="far fa-clipboard"></i> Your Complaints</span>
        <span>
          <i className="fas fa-filter"></i>
          <select className="BuzzFilter" onChange={e =>onChange(e)}>
          <option value='All'>All</option>
          <option value='Open'>Open</option>
          <option value='In-Progress'>In-Progress</option>
          <option value='Resolved'>Resolved</option>
          </select>
        </span>
      </div>
      
      <div className='SingleComplaint'>
            <table className='ComplaintTable'>
                <thead>
                <tr>
                    <td>Department</td>
                    <td>Issue Id</td>
                    <td>Assigned To</td>
                    <td>Status</td>
                </tr>
              </thead>
            </table>
      </div>
      <div>
        {complaints.map(complaint =>(
          <SingleComplaint key={complaint._id} complaint={complaint} />
        ))}
      </div>
    </Fragment>
  );
}

Complaints.propTypes = {
  getComplaints: PropTypes.func.isRequired,
  getOpen: PropTypes.func.isRequired,
  getProgress: PropTypes.func.isRequired,
  getResolved: PropTypes.func.isRequired,
  complaint: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  complaint: state.complaint,
});

export default connect( mapStateToProps, { getComplaints,getOpen,getProgress,getResolved } )(Complaints);