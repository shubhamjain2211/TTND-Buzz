import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ alerts }) => 
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div className='alertBox'>
            <div className="alert" key={alert.id}>
            <span className="alertText">{ alert.msg }</span>
            </div>
        </div>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);