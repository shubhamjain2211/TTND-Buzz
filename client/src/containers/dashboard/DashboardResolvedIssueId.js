import React,{Fragment,useEffect} from 'react';
import './Dashboard.css';
import './ComplaintIssue.css';
import Logout from '../../components/logout/Logout';
import Banner from '../../components/banner/Banner';
import { connect } from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getComplaintById, updateStatus } from '../../actions/complaint';
import Spinner from '../../components/layouts/Spinner';
import Moment from 'react-moment';

const DashboardResolvedIssueId = ({ auth, getComplaintById, updateStatus, complaint: { complaint, loading}, match })   => {

  useEffect(() => { 
    getComplaintById(match.params.id);
  },[getComplaintById]);

// Redirect if not Authenticated
  if(!auth.isAuthenticated) {
    return <Redirect to='/'/>
  }
      return(
      <Fragment>
        <Logout/>
        <Banner/>

      {complaint === null ? <Spinner/> : 

      <Fragment>
        <div className="Dashboard">            
            <div>
              <Link to="/resolved"><i className="fas fa-chevron-left"></i> Back</Link>
            </div>

            <div className="ComplaintHolderId">
              <div>
              <span><label>Issue Id:</label>{complaint.issueId}</span>
              <span><label>Created On :</label><Moment format="DD.MM.YY">{complaint.date}</Moment></span>
              </div>

              <div>
              <span><label>Name:</label>{complaint.name}</span>
              <span><label>Email:</label>{complaint.email}</span>
              </div>

              <div>
              <span><label>Department:</label>{complaint.department}</span>
              <span><label>Status:</label>{complaint.status}
              {complaint.status==="Resolved"? <button onClick={e =>updateStatus(complaint._id)} 
              className="ComplaintIdButton"><i className="fas fa-redo-alt"></i>
              Open Again</button> : null}
              {complaint.status==="Open"? <button onClick={e =>updateStatus(complaint._id)}
              className="ComplaintIdButton"><i className="fas fa-exclamation"></i> 
              In-Progress</button> : null}
              {complaint.status==="In-Progress"? <button onClick={e =>updateStatus(complaint._id)}
              className="ComplaintIdButton"><i className="far fa-check-circle"></i> 
              Resolved</button> : null}
              </span>
              </div>
        
              <div>
              <span><label>AssignedTo:</label>{complaint.assignedTo}</span>
              <span><label>LockedBy:</label>{complaint.lockedBy}</span>
              </div>

              <div>
              <span><label>Concern:</label><div className="Concern">{complaint.text}</div></span>
              {complaint.image?<span><a href={complaint.image} target='_blank'>
                <img className='imageComplaint' src={complaint.image}/></a></span>:null}
              </div>

            </div>

          </div>
      </Fragment>}

      </Fragment>
)}

DashboardResolvedIssueId.propTypes = {
  auth: PropTypes.object.isRequired,
  getComplaintById: PropTypes.func.isRequired,
  complaint: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  complaint: state.complaint
});

export default connect(mapStateToProps, { getComplaintById, updateStatus })(DashboardResolvedIssueId);