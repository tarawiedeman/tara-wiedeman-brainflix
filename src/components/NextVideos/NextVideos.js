import "./NextVideos.scss";
import PreviewCard from '../PreviewCard/PreviewCard';


//taking videos.json as an array via props, mapping through it and creating a preview card based on the data 

function NextVideos (props) {

   
    return (
            <h3 className="next__header">NEXT VIDEOS</h3>
                {props.VideoImages.map(oneVideo => (
                    <PreviewCard 
                        key={oneVideo.id} 
                        title={oneVideo.title} 
                        author={oneVideo.channel} 
                        image={oneVideo.image}/>))
        
        }

    )
}

export default NextVideos;

