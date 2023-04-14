import "./Upload.scss";
import ThumbnailImage from "../../assets/images/Upload-video-preview.jpg";
import PublishImage from "../../assets/images/publish.svg";

function Upload (){

    return (
        <div className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <div className="upload__uploadcontainer">
        <div className="upload__thumbnailcontainer">
        <h2 className="upload__subheader">VIDEO THUMBNAIL</h2>
        <img className="upload__image" src={ThumbnailImage} alt="bike"/>
        </div>
        <div className="upload__formcontainer">
        <label className="upload__subheader">TITLE YOUR VIDEO</label>
        <input className="upload__input--text" type="text" placeholder="Add a title to your video"></input>
        <label className="upload__subheader">ADD A VIDEO DESCRIPTION</label>
        <input className="upload__input--textarea" type="textarea" placeholder="Add a description to your video"></input>
        </div>
        </div>
        <div className="upload__buttoncontainer">
        <button className="upload__button--publish"><img src={PublishImage} alt="publishicon"/>PUBLISH</button>
        <button className="upload__button--cancel">CANCEL</button>
        </div>
        </div>

    );
}

export default Upload;