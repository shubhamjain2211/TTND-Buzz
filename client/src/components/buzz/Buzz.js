import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getBuzz,getActivityBuzz,getLAFBuzz, } from '../../actions/buzz';
import './Buzz.css';
import './SingleBuzz';
import SingleBuzz from './SingleBuzz';
import CreateBuzz from '../createbuzz/Createbuzz';

const Buzz = ({ getBuzz, getActivityBuzz, getLAFBuzz, buzz: {buzzs, loading} }) => {

  useEffect(() => {
    getBuzz();
  }, [getBuzz]);

  const onChange = e => {
    if(e.target.value==='Activity')
      getActivityBuzz();
    else if(e.target.value==='Lost and Found')
      getLAFBuzz();
    else getBuzz();
  };

  return (
    loading? <Spinner/> :
    <Fragment>
      <CreateBuzz />
      <div className='RecentBuzz'>
        <span><i className="fas fa-bullhorn"></i> Recent Buzz</span>
      <span>
        <i className="fas fa-filter"></i>
        <select className="BuzzFilter" onChange={e =>onChange(e)}>
        <option value='All'>All</option>
        <option value='Activity'>Activity</option>
        <option value='Lost and Found'>Lost and Found</option>
      </select>
      </span>
      </div>
      
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
  getActivityBuzz: PropTypes.func.isRequired,
  getLAFBuzz: PropTypes.func.isRequired,
  buzz: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  buzz: state.buzz,
});

export default connect( mapStateToProps, { getBuzz,getActivityBuzz,getLAFBuzz } )(Buzz);
