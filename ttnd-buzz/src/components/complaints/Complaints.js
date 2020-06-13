import React,{Fragment,useEffect} from 'react';
import './Complaints.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getComplaints } from '../../actions/complaint';

const Complaints = ({ getComplaints, complaint: {complaint, loading} }) => {
  
  useEffect(() => {
    getComplaints();
  }, [getComplaints]);

  return (
    <Fragment>
      Complaints
    </Fragment>
  );
}

Complaints.propTypes = {
  getComplaints: PropTypes.func.isRequired,
  complaint: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  complaint: state.complaint
});

export default connect( mapStateToProps, { getComplaints } )(Complaints);