import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './Complaints.css';

const SingleComplaint = ( {auth, complaint: { _id, user, text, name, department, issueTitle, issueId, lockedBy, assignedTo, status, date }}) =>{
    return(
    <Fragment>{text}</Fragment>
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