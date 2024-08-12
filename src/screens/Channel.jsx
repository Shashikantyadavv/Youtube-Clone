import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelDetail } from '../redux/actions/Channel.action';

// Utility function to format numbers
const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K';
  } else {
    return num;
  }
};

// Utility function to format dates
const formatDate = (date) => {
  const now = new Date();
  const publishedDate = new Date(date);
  const diff = Math.floor((now - publishedDate) / 1000); // diff in seconds

  if (diff < 60) {
    return `${diff} seconds ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 2592000) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff < 31536000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
};

const ChannelScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelDetail(id));
  }, [id, dispatch]);

  const { data: channel, loading } = useSelector((state) => state.channelDetail);

  if (loading || !channel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Channel Banner */}
      <div className="relative">
        <img
          src={channel.snippet.thumbnails.high.url}
          alt="Channel Banner"
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full flex items-center space-x-4">
          <img
            src={channel.snippet.thumbnails.high.url}
            alt="Channel Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">{channel.snippet.title}</h1>
            <p className="text-sm">
              {formatNumber(channel.statistics.subscriberCount)} subscribers • {channel.statistics.videoCount} videos
            </p>
            <p className="text-sm mt-1">{channel.snippet.description}</p>
          </div>
          <button className="ml-auto bg-white text-black px-4 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Channel Navigation */}
      <div className="bg-gray-800 shadow-md">
        <nav className="container mx-auto px-4 py-2 flex space-x-4">
          {['Home', 'Videos', 'Shorts', 'Live', 'Playlists', 'Community', 'Channels', 'About'].map((tab) => (
            <button key={tab} className="text-gray-400 hover:text-white">
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Featured Video */}
      {channel.featuredVideo && (
        <div className="container mx-auto px-4 py-4">
          <div className="aspect-w-16 aspect-h-9 bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${channel.featuredVideo.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Featured Video"
              className="w-full h-full"
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mt-2">{channel.featuredVideo.title}</h2>
        </div>
      )}

      {/* Video Grid */}
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {channel.videos && channel.videos.length > 0 &&
          channel.videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-black">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-400">
                  {formatNumber(video.viewCount)} views • {formatDate(video.publishedAt)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChannelScreen;
