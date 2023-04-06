import "./PreviewCard.scss";

function PreviewCard({video,setVideoDetails}) {
 

  return (
    <div
      onClick={() => {
        setVideoDetails(video);
      }}
    >
      <div className="video__previewcard">
        <img
          src={video.image}
          alt={video.title}
          style={{ width: "400px" }}
        />
        <h3 className="video__title">{video.title}</h3>
        <h3 className="video__author">{video.channel}</h3>
      </div>
    </div>
  );
}

export default PreviewCard;
