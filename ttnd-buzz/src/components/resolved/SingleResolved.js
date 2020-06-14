import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './Resolved';

const SingleComplaint = ( {auth, complaint: { _id, user, text, name, 
    department, issueTitle, issueId, lockedBy, assignedTo, status, date }}) =>{
    return(
    <Fragment>
        <div className='SingleComplaint'>
            <table className='ComplaintTable'>
                <tr>
                    <td>Department</td>
                    <td>Issue Id</td>
                    <td>Assigned To</td>
                    <td>Locked By</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>
                        {department}
                    </td>
                    <td>
                        {issueId}
                    </td>
                    <td>
                        {lockedBy}
                    </td>
                    <td>
                        {assignedTo}
                    </td>
                    <td>
                        {status}
                    </td>
                </tr>
            </table>
        </div>
    </Fragment>
    )
};

SingleComplaint.propTypes = {
    complaint: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect( mapStateToProps,{} )(SingleComplaint);