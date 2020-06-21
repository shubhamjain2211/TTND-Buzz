import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getBuzz } from '../../actions/buzz';
import './Buzz.css';
import './SingleBuzz';
import SingleBuzz from './SingleBuzz';
import CreateBuzz from '../createbuzz/Createbuzz';

const Buzz = ({ getBuzz, buzz: {buzzs, loading} }) => {

  useEffect(() => {
    getBuzz();
  }, [getBuzz]);

  return (
    loading? <Spinner/> :
    <Fragment>
      <CreateBuzz />
      <div className='RecentBuzz'><i className="fas fa-bullhorn"></i> Recent Buzz</div>
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
