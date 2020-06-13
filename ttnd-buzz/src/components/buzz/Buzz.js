import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getBuzz } from '../../actions/buzz';
import './Buzz.css';

const Buzz = ({ getBuzz, buzz: {buzz, loading} }) => {

  useEffect(() => {
    getBuzz();
  }, [getBuzz]);

  return (
    <Fragment>
      Buzz
    </Fragment>
  );
}

Buzz.propTypes = {
  getBuzz: PropTypes.func.isRequired,
  buzz: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  buzz: state.buzz
});

export default connect( mapStateToProps, { getBuzz } )(Buzz);
