// import React,{Fragment,useEffect} from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Spinner from '../layouts/Spinner';
// // import { getComplaintById } from '../../actions/complaint';
// // import { useParams } from "react-router";

// const ComplaintById = ({auth, complaint: { _id, user, text, name, 
//     department, issueTitle, issueId, lockedBy, assignedTo, status, date }}) => { 
//     // { getComplaintById, complaint : {complaint, loading} }
// //     let { id } = useParams();
  
// //   useEffect(() => { 
// //     getComplaintById(id);
// //   }, [getComplaintById]);
  
//   return (
//     // loading? <Spinner/> :
//     <Fragment> 
//             <table>
//                 <thead>
//                 <tr>
//                     <td>Department</td>
//                     <td>Issue Id</td>
//                     <td>Assigned To</td>
//                     <td>Status</td>
//                 </tr>
//               </thead>
//             </table>
//     </Fragment>
//   );
// }

// ComplaintById.propTypes = {
// //   getComplaintById: PropTypes.func.isRequired,
//   complaint: PropTypes.object.isRequired
// }

// const mapStateToProps = state =>({
// //   complaint: state.complaint,
// });

// export default connect( mapStateToProps, {})(ComplaintById);