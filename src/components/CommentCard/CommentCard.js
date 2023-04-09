import "./CommentCard.scss";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";

function CommentCard({ commentcard }) {

  var adjustedDate = new Date(commentcard.timestamp);
    var month = adjustedDate.getUTCMonth() + 1;
    var day = adjustedDate.getUTCDate();
    var year = adjustedDate.getUTCFullYear();
    var fullDate = month + "/" + day + "/" + year;
  
  return (
    <div className="commentcard">
      <div className="commentcard__columncontainer">
      <div className="commentcard__rowcontainer">
      <img className="commentcard__avatar" src={AvatarImage} alt="avatarimage" />
      <h3 className="commentcard__name">{commentcard.name}</h3>
      <h3 className="commentcard__date">{fullDate}</h3>
      </div>
      <h3 className="commentcard__comment">{commentcard.comment}</h3>
      </div>
    </div>
  );
}

export default CommentCard;


