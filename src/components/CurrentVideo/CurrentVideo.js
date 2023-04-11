import "./CurrentVideo.scss";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
import CommentCard from "../CommentCard/CommentCard";
import ViewsImage from "../../assets/images/views.svg";
import LikesImage from "../../assets/images/likes.svg";
import AddCommentImage from "../../assets/images/add_comment.svg"

function CurrentVideo(props) {
  const video = props.video;

  var adjustedDate = new Date(video.timestamp);
  var month = adjustedDate.getUTCMonth() + 1;
  var day = adjustedDate.getUTCDate();
  var year = adjustedDate.getUTCFullYear();
  var fullDate = month + "/" + day + "/" + year;

  return (
    <div className="main">
      <video
        className="main__currentvideo"
        poster={video.image}
        src={video.video}
        controls
      ></video>
      <div className="main__videodetails">
        <h1 className="main__videotitle">{video.title}</h1>
        <div className="main__rowcontainer">
          <div className="main__columncontainer">
            <h2 className="main__videoauthor">{"By" + " " + video.channel}</h2>
            <h3 className="main__videodate">{fullDate}</h3>
          </div>
          <div className="main__social">
            <div className="main__videoviews">
              <img className="main_videoviews--image" src={ViewsImage} width="25rem"/>
              <div>{video.views}</div>
            </div>
            <div className="main__videolikes">
              <img className="main_videolikes--image" src={LikesImage}/>
              <div>{video.likes} </div>
            </div>
          </div>
        </div>
        <p className="main__videodescription">{video.description}</p>
      </div>
      <div className="comments">
        <div className="comments__count">
          {video.comments.length + " " + "Comments"}
        </div>
        <img className="comments__avatar" src={AvatarImage} alt="avatarimage" />
        <div className="comments__rowcontainer">
          <div className="comments__columncontainer">
            <label className="comments__header">JOIN THE CONVERSATION</label>
            <textarea
              className="comments__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="comments__button"><img src={AddCommentImage}/> COMMENT</button>
        </div>
      </div>

      {/* below code should take a comment object from comments array and make a comment card out of it (for each object) */}
      {video.comments.map((commentcard) => (
        <CommentCard commentcard={commentcard} key={commentcard.id} />
      ))}
    </div>
  );
}

export default CurrentVideo;
