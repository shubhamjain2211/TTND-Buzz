import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './Buzz.css';
import { addLike, addDislike, deleteBuzz }  from '../../actions/buzz';

const SingleBuzz = ( {addLike, addDislike, deleteBuzz, auth, buzz: {_id, text, category, email, name, avatar, user, likes, dislikes, date}}) =>{
    return(
        <div className='SingleBuzz'>
            <p className='Category'>{category}</p>
            <img className='ProfilePic' src={avatar} alt='Profile Picture'></img>
            <h5>{name}</h5>
            <h6>({email})</h6>
            <p>Image is supposed to be here</p>
            <p className='text'>{text}</p>
            <div className='StatusBar'>
                <p>Posted On: <Moment format='DD/MM/YYYY'>{date}</Moment></p>    
                <div><button onClick={ e => addLike(_id) } type='button'>{likes.length}&nbsp;<i className="far fa-thumbs-up"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={ e => addDislike(_id) } type='button'>{dislikes.length}&nbsp;<i className="far fa-thumbs-down"></i></button></div>
            </div>
            {!auth.loading && user === auth.user._id && (
                <button onClick={e =>deleteBuzz(_id)} className='DeleteBuzz' type='button'>Delete <i className="fas fa-trash-alt"></i></button>
            )}
        </div>
    )
};

SingleBuzz.propTypes = {
    buzz: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addDislike: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    deleteBuzz: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect( mapStateToProps,{ addLike, addDislike, deleteBuzz} )(SingleBuzz);