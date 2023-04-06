import "./CommentCard.scss";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";

function CommentCard({ commentcard }) {
  
  return (
    <div className="commentcard">
      <img className="avatar" src={AvatarImage} alt="avatarimage" />
      <h3 className="commentcard__name">{commentcard.name}</h3>
      <h3 className="commentcard__date">{commentcard.timestamp}</h3>
      <h3 className="commentcard__comment">{commentcard.comment}</h3>
    </div>
  );
}

export default CommentCard;
