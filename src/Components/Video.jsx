import { useEffect, useState, useMemo } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../api";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Video = ({ video }) => {
  const [duration, setDuration] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [view, setView] = useState("N/A");
  const [publishedAgo, setPublishedAgo] = useState("Just now");
  const [channelDetails, setChannelDetails] = useState(null);

  const activeState = useSelector((state) => state.homeVideo.activeCategory);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request("/videos", {
          params: {
            part: "contentDetails,snippet,statistics",
            id: video.id,
          },
        });

        if (response && response.data && response.data.items.length > 0) {
          const videoData = response.data.items[0];
          const { contentDetails, statistics, snippet } = videoData;

          // Set duration
          const durationPattern = /^P(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/;
          const durationStr = contentDetails.duration;
          const match = durationStr.match(durationPattern);
          const hours = match[1] ? parseInt(match[1]) : 0;
          const minutes = match[2] ? parseInt(match[2]) : 0;
          const seconds = match[3] ? parseFloat(match[3]) : 0.0;
          setDuration({ hours, minutes, seconds });

          // Set views
          const viewCount = parseInt(statistics.viewCount);
          if (viewCount >= 1000000000) {
            setView(Math.floor(viewCount / 1000000000) + "B");
          } else if (viewCount >= 1000000) {
            setView(Math.floor(viewCount / 1000000) + "M");
          } else if (viewCount >= 1000) {
            setView(Math.floor(viewCount / 1000) + "k");
          } else {
            setView(viewCount.toString());
          }

          // Set published ago
          const difference = Date.now() - new Date(snippet.publishedAt);
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          if (days < 1) {
            const minutes = difference / (1000 * 60);
            setPublishedAgo("Just now");
          } else if (days < 25) {
            setPublishedAgo(`${days} days ago`);
          } else if (days < 365) {
            const month = Math.floor(days / 30);
            setPublishedAgo(`${month} months ago`);
          } else {
            const year = Math.floor(days / 365);
            setPublishedAgo(`${year} years ago`);
          }

          // Set channel details
          const channelResponse = await request("/channels", {
            params: {
              part: "snippet",
              id: snippet.channelId,
            },
          });
          setChannelDetails(channelResponse.data.items[0]);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    if (video.id) {
      fetchData();
    }

  }, [video.id]);

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  // Memoized values
  const formattedDuration = useMemo(() => {
    return duration.hours > 0
      ? `${duration.hours}:${duration.minutes}:${duration.seconds}`
      : `${duration.minutes}:${duration.seconds}`;
  }, [duration]);

  return (
    <div onClick={handleClick} className="max-w-xs rounded shadow-lg bg-slate-900 flex flex-col h-full hover:cursor-pointer">
      {/* Video thumbnail */}
      <div className="relative flex-shrink-0">
        <LazyLoadImage
          className="w-[284.44] h-[160] object-cover"
          src={
            activeState === "All"
              ? video?.snippet?.thumbnails?.maxres?.url
              : video.snippet.thumbnails.high.url
          }
          effect="blur"
        />
        {/* Displaying duration */}
        <span className="absolute bottom-2 right-2 bg-black text-white px-1 py-0.5 text-xs rounded">
          {formattedDuration}
        </span>
      </div>

      {/* Video details */}
      <div className="px-1 py-2 flex-grow flex flex-col justify-between">
        {/* Video title */}
        <div className="flex items-center mb-2">
          <LazyLoadImage
            className="w-20 h-10 rounded-full"
            src={channelDetails?.snippet?.thumbnails?.high.url}
            effect="blur"
          />
          <div className="flex-grow ml-4">
            <div className="text-sm line-clamp-2 text-white">
              {video?.snippet?.title}
            </div>
            <p className="text-sm text-gray-400 truncate">
              {video?.snippet?.channelTitle}
            </p>
          </div>
        </div>

        {/* Views and upload date */}
        <div className="flex items-center text-sm text-gray-400 mb-2 ml-11">
          <AiFillEye className="mr-1" /> {view} Views • {publishedAgo}
        </div>
      </div>
    </div>
  );
};

export default Video;

Video.propTypes = {
  video: PropTypes.object.isRequired,
};

