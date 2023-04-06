import "./Comments.scss";
import AvatarImage from '../../assets/images/Mohan-muruge.jpg';
import CommentCard from '../CommentCard/CommentCard';
import VideoDetails from '../../data/video-details.json';


function Comments(props) {


    //state should indicate main video 
    //need an event listener on ____ to see what current video is, and then get an array of comments for 
    //that video only (by id?)
    // Using both of the data files provided from the assets, you must use state to hold the data and pass it down as props to generate side-videos and main-video content including comments.
    // comments still need to be rendered dynamically (data coming from comments property of the main-video object stored in state).
    return (
        <div className="comments">
        <div className="comments__count">{props.videoDetails.length + 'Comments'}</div>
        <img className="avatar"
        src={AvatarImage}
        alt="avatarimage"/>
        <div>
        <div className="comments__header">JOIN THE CONVERSATION</div>
        <textarea className="comments__input" placeholder="Add a new comment"></textarea>
        </div>
        <button className="button comments__button">COMMENT</button>
        

        {/* I think I need to listen for a click on a video in side bar and then use that 
        id to pull up the relevant comments array */}

        {props.VideosArray.map((comments) => (

        <CommentCard 
            key={comments.id}
            name={comments.name} 
            comment={comments.comment}
            date={comments.timestamp}
            
        />
        //this passes props to CommentCard
        ))
        
        }
       
        <div className="divider"></div>
        </div>
    );
}

export default Comments; 