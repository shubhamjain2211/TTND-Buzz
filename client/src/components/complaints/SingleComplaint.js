import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Complaints.css';
import { Link } from 'react-router-dom';

const SingleComplaint = ( {auth, complaint: { _id, user, text, name, email, 
    department, issueTitle, issueId, lockedBy, assignedTo, status, date }}) =>{
        let statusClass = 'open';
        if(status=='In-Progress')
            statusClass = 'prog';
        else if(status=='Resolved')
            statusClass = 'resolved';

    return(
    <Fragment>
        <div className='SingleComplaint'>
            <table className='ComplaintTable'>
                <tbody>
                <tr>
                    <td>
                        {department}
                    </td>
                    <td>
                        <Link to={`/complaints/${_id}`}>{issueId}</Link>
                    </td>
                    <td>
                        {assignedTo}
                    </td>
                    <td>
                        <span className={statusClass}>{status}</span> 
                    </td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    </Fragment>
    )
};

SingleComplaint.propTypes = {
    complaint: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect( mapStateToProps,{} )(SingleComplaint);