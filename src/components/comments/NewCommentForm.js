import { useRef, useEffect} from 'react';

import classes from './NewCommentForm.module.css';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';


const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  //use the http hook to run the addComment reducer function and pull out the following properties 
  const {sendRequest, status, error} = useHttp(addComment)

  const {onAddedComment} = props;
  
//everytime the 'status' (which is extracted above) changes or gives an error
//this function will run and and it will update the comments section to reflect the mose recent
//comments by running the onAdddComment() which is defined in comment.js
//*IF the status is complete and without errors
  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment])
  
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;


    // send comment to server
    sendRequest({commentData: {text: enteredText}, quoteId: props.quoteId});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
