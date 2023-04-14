import "./PreviewCard.scss";
import {Link} from "react-router-dom";

function PreviewCard({ video, key, setVideoDetails }) {
  return (
    <Link to={`/${video.id}`}>
    <div
      className="video"
      // onClick={() => {
      //   console.log(key);
      //   setVideoDetails(key);
        //currentVideoDetails state var should be video object with id/key clicked
        //I think I just need to take the id of the vid clicked and send it into the query params, 
        //then tell setVideoDetails to run
        
      
      
    >

      <div className="video__previewcard">
        <img className="video__image" src={video.image} alt={video.title} />
        <div className="video__columncontainer">
          <h3 className="video__title">{video.title}</h3>
          <h3 className="video__author">{video.channel}</h3>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default PreviewCard;
