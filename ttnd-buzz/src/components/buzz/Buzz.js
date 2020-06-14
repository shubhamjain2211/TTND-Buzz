import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getBuzz } from '../../actions/buzz';
import './Buzz.css';
import './SingleBuzz';
import {Redirect} from 'react-router-dom';
import SingleBuzz from './SingleBuzz';

const Buzz = ({ getBuzz, buzz: {buzzs, loading} }) => {

  useEffect(() => {
    getBuzz();
  }, [getBuzz]);

  return (
    loading? <Spinner/> :
    <Fragment>
      <div className='RecentBuzz'>@ Recent Buzz</div>
      <div>
        {buzzs.map(buzz =>(
          <SingleBuzz key={buzz._id} buzz={buzz} />
        ))}
      </div>
    </Fragment>
  );
}

Buzz.propTypes = {
  getBuzz: PropTypes.func.isRequired,
  buzz: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  buzz: state.buzz,
});

export default connect( mapStateToProps, { getBuzz } )(Buzz);
