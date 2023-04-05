import "./CommentCard.scss";
import AvatarImage from '../../assets/images/Mohan-muruge.jpg';
import VideoDetails from '../../data/video-details.json';

function CommentCard (props) {
    console.log(props);
    return 
    (
    <div className="commentcard"> 
    <img className="commentcard__avatar"
    src={AvatarImage}
    alt="avatarimage"/>
    <h3 className="commentcard__subheader">{props.comments.name}</h3>
    <h3 className="commentcard__subheader">{props.comments.date}</h3>
    <p className="commentcard__commenttext">{props.comments.comment}</p>
    </div> 
    );

}

export default CommentCard;