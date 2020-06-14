import React,{Fragment,useEffect} from 'react';
import './Complaints.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getComplaints } from '../../actions/complaint';
import {Redirect} from 'react-router-dom';
import SingleComplaint from './SingleComplaint';
import ComplaintBox from '../complaintbox/Complaintbox';

const Complaints = ({ getComplaints, complaint: {complaints, loading} }) => {
  
  useEffect(() => {
    getComplaints();
  }, [getComplaints]);

  return (
    loading? <Spinner/> :
    <Fragment>
      <ComplaintBox />
      <div className='YourComplaints'>Your Complaints</div>
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
  complaint: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  complaint: state.complaint,
});

export default connect( mapStateToProps, { getComplaints } )(Complaints);