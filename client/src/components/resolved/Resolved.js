import React,{Fragment,useEffect} from 'react';
import './Resolved';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getComplaints } from '../../actions/complaint';
import SingleResolved from './SingleResolved';

const Complaints = ({ getComplaints, complaint: {complaints, loading} }) => {
  
  useEffect(() => {
    getComplaints();
  }, [getComplaints]);

  return (
    loading? <Spinner/> :
    <Fragment>
      <div className='YourComplaints'>Your Complaints</div>
      <div>
      <table className='ComplaintTable'>
                <thead>
                <tr>
                    <td>Department</td>
                    <td>Issue Id</td>
                    <td>Assigned To</td>
                    <td>Locked By</td>
                    <td>Status</td>
                </tr>
                </thead>
      </table>
        {complaints.map(complaint =>(
          <SingleResolved key={complaint._id} complaint={complaint} />
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