const VideoMetadata = () => {
  return (
    <div className="mt-4 px-4">
      <h1 className="text-2xl font-semibold">Video Title Placeholder</h1>
      <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
        <div>1,234,567 views • 2 hours ago</div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1">
            <span className="material-icons">thumb_up</span>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1">
            <span className="material-icons">thumb_down</span>
            <span>Dislike</span>
          </button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Channel Info */}
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/48"
          alt="Channel Icon"
        />
        <div className="flex-grow">
          <div className="font-semibold">Channel Name Placeholder</div>
          <div className="text-sm text-gray-400">1M subscribers</div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full">
          Subscribe
        </button>
      </div>

      <hr className="my-4" />
    </div>
  );
};

export default VideoMetadata;
