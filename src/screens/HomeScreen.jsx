import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../Components/CategoriesBar";
import Video from "../Components/Video";
import { useEffect } from "react";
import SkeletonVideo from "../Components/Skeleton";
import {
  getCategoriesVideos,
  getPopularVideos,
} from "../redux/actions/Video.action";
import { useState, useRef } from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.homeVideo.videos);
  const activeState = useSelector((state) => state.homeVideo.activeCategory);
  const loading = useSelector((state) => state.homeVideo.loading);

  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const lastRowRef = useRef(null);

  const fetchMoreData = () => {
    if (!hasMore || isFetching) return;
    setIsFetching(true);
    if (activeState === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoriesVideos(activeState));
    }
  };

  const debounceScroll = useRef(null);

  const handleScroll = () => {
    if (!hasMore || isFetching) return;

    if (debounceScroll.current) {
      clearTimeout(debounceScroll.current);
    }

    debounceScroll.current = setTimeout(() => {
      const isAtBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;

      if (isAtBottom) {
        fetchMoreData();
      }
    }, 200);
  };

  useEffect(() => {
    if (videos.length === 0) {
      fetchMoreData();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (debounceScroll.current) {
        clearTimeout(debounceScroll.current);
      }
    };
  }, [hasMore, isFetching]);

  useEffect(() => {
    if (!loading) {
      setIsFetching(false);
    }
  }, [videos, loading]);

  return (
    <div className="flex mt-2 mx-2 relative">
      <div className="flex flex-wrap w-full">
        <CategoriesBar />
        <div className="flex w-full justify-center mt-4 gap-4 flex-wrap place-content-center">
          {videos.length > 0 ? videos.map((video, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 space-y-4"
            >
              <div className="">
                <Video video={video} />
              </div>
            </div>
          )) : 
            <SkeletonVideo/>
          }
          {videos.length > 0 && (
            <div ref={lastRowRef} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
