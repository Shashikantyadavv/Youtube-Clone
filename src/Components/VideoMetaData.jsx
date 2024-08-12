/* eslint-disable react/prop-types */
import{ useState } from 'react';

const formatViewCount = (num) => {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
  return num.toString();
};

const formatTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) return Math.floor(interval) + ' years ago';
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + ' months ago';
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + ' days ago';
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + ' hours ago';
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + ' minutes ago';
  return Math.floor(seconds) + ' seconds ago';
};

const formatDescription = (description) => {
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#%=~_|])/ig;
  const formattedDescription = description.replace(urlRegex, (url) => {
    return `<a href="${url}" class="text-blue-500" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  return formattedDescription.replace(/\n/g, '<br>');
};

const VideoMetadata = ({ snippet, statistics }) => {
  const [showMore, setShowMore] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false); // Ensure dislike is removed if liked
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false); // Ensure like is removed if disliked
  };

  return (
    <div className="mt-4 px-4">
      <h1 className="text-2xl font-semibold">{snippet?.title || 'Title not available'}</h1>
      <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
        <div>{formatViewCount(statistics?.viewCount || 0)} views • {formatTimeAgo(snippet?.publishedAt)}</div>
        <div className="flex items-center space-x-4">
          {/* Like Button */}
          <button 
            className={`flex items-center space-x-1 transition transform ${liked ? 'animation-like' : ''}`}
            onClick={handleLike}
          >
            <span className="material-icons">thumb_up</span>
            <span>{formatViewCount(statistics?.likeCount) || 0}</span>
          </button>
          {/* Dislike Button */}
          <button 
            className={`flex items-center space-x-1 transition transform ${disliked ? 'animation-dislike' : ''}`}
            onClick={handleDislike}
          >
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
          <div className="font-semibold">{snippet?.channelTitle || 'Channel title not available'}</div>
          <div className="text-sm text-gray-400">1M subscribers</div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full">
          Subscribe
        </button>
      </div>

      <hr className="my-4" />

      {/* Description */}
      <div className={`text-sm text-gray-800 ${showMore ? '' : 'line-clamp-3'}`}>
        <div dangerouslySetInnerHTML={{ __html: formatDescription(snippet?.description || 'Description not available') }} />
      </div>
      <button 
        onClick={toggleShowMore} 
        className="text-blue-500 mt-2"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default VideoMetadata;
