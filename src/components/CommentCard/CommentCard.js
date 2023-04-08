import "./CommentCard.scss";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";

function CommentCard({ commentcard }) {
  
  return (
    <div className="commentcard">
      <div className="commentcard__columncontainer">
      <div className="commentcard__rowcontainer">
      <img className="commentcard__avatar" src={AvatarImage} alt="avatarimage" />
      <h3 className="commentcard__name">{commentcard.name}</h3>
      <h3 className="commentcard__date">{commentcard.timestamp}</h3>
      </div>
      <h3 className="commentcard__comment">{commentcard.comment}</h3>
      </div>
    </div>
  );
}

export default CommentCard;
