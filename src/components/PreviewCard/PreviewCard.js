import './PreviewCard.scss';
import Videos from '../../data/videos.json';

function PreviewCard (props){
    console.log(props);

    return (
        <div className="previewcard">
        <h3>{props.title}</h3>
        <h3>{props.author}</h3>
        <img src={props.image}></img>
        </div>

    );
}

export default PreviewCard;