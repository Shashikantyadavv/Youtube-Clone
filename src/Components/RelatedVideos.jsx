

const RelatedVideos = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Related Videos</h2>
      <div className="space-y-4">
        {/* Placeholder for related videos */}
        <div className="flex space-x-4">
          <img
            className="w-24 h-14"
            src="https://via.placeholder.com/96x54"
            alt="Video Thumbnail"
          />
          <div>
            <div className="font-semibold">Related Video Title Placeholder</div>
            <div className="text-sm text-gray-400">Channel Name • 123K views • 1 day ago</div>
          </div>
        </div>
        {/* Repeat above block for more related videos */}
      </div>
    </div>
  );
};

export default RelatedVideos;
