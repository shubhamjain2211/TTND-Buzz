import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './Buzz.css';
import { addLike, addDislike, deleteBuzz }  from '../../actions/buzz';

const SingleBuzz = ( {addLike, addDislike, deleteBuzz, auth,
    buzz: {_id, text, category, image, email, name, avatar, user, likes, dislikes, date}}) =>{
    return(
        <div className='SingleBuzz'>
            <div className='BuzzOwner'>
                <div className="ProfilePicDiv">
                    <img className='ProfilePic ' src={avatar} alt='Profile Picture'></img>
                    {name}
                    <span className="texttooltip">{email}</span>
                </div>
                <div>
                    {!auth.loading && user === auth.user._id && (
                    <button onClick={e =>deleteBuzz(_id)} className='DeleteBuzz' 
                    type='button'><i className="fas fa-trash-alt"></i></button>
                    )}
                    <div className='CategoryDiv'>
                        <i className="fas fa-star"></i> 
                        {category}
                    </div>
                </div>
            </div>

            <div className='BuzzContent'>
                <p className='text'>{text}</p>
                {image?<a href={image} target='_blank'><img className='imageBuzz' src={image}/></a>:null}
            </div>

            <div className='StatusBar'>
                <div>
                    {/* <Moment format='DD.MM.YY'>{date}</Moment> */}
                    <Moment toNow>{date}</Moment>
                </div>
                {!auth.loading && user !== auth.user._id && (
                <div>
                    <button onClick={ e => addLike(_id) } type='button'>
                        {likes.length}&nbsp;
                        <i className="far fa-thumbs-up">
                        </i>
                    </button>&nbsp;&nbsp;
                    <button onClick={ e => addDislike(_id) } type='button'>
                         {dislikes.length}&nbsp;<i className="far fa-thumbs-down">
                        </i>
                    </button>
                </div>
                    )}
            </div>
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