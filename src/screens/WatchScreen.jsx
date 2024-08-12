import VideoMetadata from "../Components/VideoMetaData";
import RelatedVideos from "../Components/RelatedVideos";
import CommentsSection from "../Components/CommentsSection";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../redux/actions/Video.action";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [id, dispatch]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  console.log(video, loading);
  if (video) {
    const { snippet, statistics } = video;
    console.log(snippet, statistics);

    return (
      <div className="mt-20 ml-3 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Section: Video Player */}
        <div className="lg:col-span-8">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {!loading ? (
            <VideoMetadata snippet={snippet} statistics={statistics} />
          ) : (
            <h6>Loading...</h6>
          )}
          <CommentsSection />
        </div>

        {/* Right Section: Related Videos */}
        <div className="lg:col-span-4">
          <RelatedVideos />
        </div>
      </div>
    );
  }
};

export default WatchScreen;
