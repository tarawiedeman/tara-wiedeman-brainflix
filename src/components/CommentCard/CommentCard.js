import "./CommentCard.scss";
import AvatarImage from '../../assets/images/Mohan-muruge.jpg';
import VideoDetails from '../../data/video-details.json';

function CommentCard (props) {
    console.log(props);
    return(<div className="commentcard"> 
    <div class="divider"></div>
    <img className="commentcard__avatar"
    src={AvatarImage}
    alt="avatarimage"/>
    <div className="commentcard__container">
    <h3 className="commentcard__subheader">{props.comments.name}</h3>
    <h3 className="commentcard__subheader--grey">{props.comments.date}</h3>
    </div>
    <p className="commentcard__commenttext">{props.comments.comment}</p>
    <div class="divider"></div>
    </div> 
    
    );

}

export default CommentCard;