import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getComplaintsAdmin } from '../../actions/complaint';
import SingleResolved from './SingleResolved';

const Complaints = ({ getComplaintsAdmin, complaint: {complaints, loading} }) => {
  
  useEffect(() => {
    getComplaintsAdmin();
  }, [getComplaintsAdmin]);

  return (
    loading? <Spinner/> :
    <Fragment>
      <div className='YourComplaints'><i className="far fa-calendar-check"></i> Your Complaints</div>
      <div>
      <table className='ComplaintTable ResolvedTable'>
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
  getComplaintsAdmin: PropTypes.func.isRequired,
  complaint: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  complaint: state.complaint,
});

export default connect( mapStateToProps, { getComplaintsAdmin } )(Complaints);