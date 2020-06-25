import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getComplaintsAdmin, getOpenAdmin, getProgressAdmin, getResolvedAdmin } from '../../actions/complaint';
import SingleResolved from './SingleResolved';

const Complaints = ({ getComplaintsAdmin, getOpenAdmin, getProgressAdmin, getResolvedAdmin, 
  complaint: {complaints, loading} }) => {
  
  useEffect(() => {
    getComplaintsAdmin();
  }, [getComplaintsAdmin]);

  const onChange = e => {
    if(e.target.value==='Open')
      getOpenAdmin();
    else if(e.target.value==='In-Progress')
      getProgressAdmin();
    else if(e.target.value==='Resolved')
      getResolvedAdmin();
    else getComplaintsAdmin();
  };

  return (
    loading? <Spinner/> :
    <Fragment>
      <div className='YourComplaints'>
        <span><i className="far fa-calendar-check"></i> Your Complaints</span>
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
  getOpenAdmin: PropTypes.func.isRequired,
  getProgressAdmin: PropTypes.func.isRequired,
  getResolvedAdmin: PropTypes.func.isRequired,
  complaint: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  complaint: state.complaint,
});

export default connect( mapStateToProps, { getComplaintsAdmin, getOpenAdmin, 
  getProgressAdmin, getResolvedAdmin } )(Complaints);