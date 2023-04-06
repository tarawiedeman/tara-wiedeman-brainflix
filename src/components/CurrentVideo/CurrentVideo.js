import "./CurrentVideo.scss";
import AvatarImage from '../../assets/images/Mohan-muruge.jpg';
import CommentCard from "../CommentCard/CommentCard";

function CurrentVideo (props) {
 const video=props.video;
 console.log(video);
   
    return <div className="main">
      <video className="main__currentvideo" poster={video.image} src={video.video} controls></video>
      <div className="videocard">
      <h1 className="main__title">{video.title}</h1>
      <div className="divider"></div>
      <h2 className="main__author">{video.channel}</h2>
      <h3 className="main__date">{video.date}</h3>
      <div className="main__views">{video.views}</div>
      <div className="main__likes">{video.likes}</div>
      <div className="divider"></div>
      <p className="main__description">{video.description}</p>
      </div>
      <div className="comments">
        <div className="comments__count">{video.comments.length + 'Comments'}</div>
        <img className="avatar"
        src={AvatarImage}
        alt="avatarimage"/>
        <div>
        <div className="comments__header">JOIN THE CONVERSATION</div>
        <textarea className="comments__input" placeholder="Add a new comment"></textarea>
        </div>
        <button className="button comments__button">COMMENT</button>
      </div>
      <div className="divider"></div>
{/* below code should take a comment object from comments array and make a comment card out of it (for each object) */}
      {video.comments.map( (commentcard) => (
        <CommentCard commentcard={commentcard} key={commentcard.id}/>
       
      )
      )}
     
      </div>;
}

export default CurrentVideo;
