import "./Comments.scss";
import AvatarImage from '../../assets/images/Mohan-muruge.jpg';
import CommentCard from '../CommentCard/CommentCard';
import VideoDetails from '../../data/video-details.json';

function Comments(props) {

    const CommentCardList = VideoDetails;
    return (
        <div className="comments">
        <div className="comments__count">{CommentCardList.length} Comments</div>
        <img className="avatar"
        src={AvatarImage}
        alt="avatarimage"/>
        <div>
        <div className="comments__header">JOIN THE CONVERSATION</div>
        <textarea className="comments__input" placeholder="Add a new comment"></textarea>
        </div>
        <button className="button comments__button">COMMENT</button>
        <div class="divider"></div>

        { CommentCardList.map(oneCard => (

        <CommentCard 
            key={oneCard.comments.id}
            name={oneCard.comments.name} 
            comment={oneCard.comments.comment}
            date={oneCard.comments.timestamp}
        />
        ))
        
        }
       
        <div class="divider"></div>
        </div>
    );
}

export default Comments; 