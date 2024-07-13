import VideoMetadata from '../Components/VideoMetaData';
import RelatedVideos from '../Components/RelatedVideos';
import CommentsSection from '../Components/CommentsSection';
import { useParams } from 'react-router-dom';


const WatchScreen = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div className="mt-20 ml-3 grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Section: Video Player */}
      <div className="lg:col-span-8">
      <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <VideoMetadata />
        <CommentsSection />
      </div>

      {/* Right Section: Related Videos */}
      <div className="lg:col-span-4">
        <RelatedVideos />
      </div>
    </div>
  );
};

export default WatchScreen;
