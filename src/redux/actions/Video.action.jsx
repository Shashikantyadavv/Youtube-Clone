import request from "../../api";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../ActionType";

//  https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=es&videoCategoryId=17&key=[YOUR_API_KEY] HTTP/1.1

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const { nextPageToken } = getState().homeVideo;
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        maxResults: 20,
        regionCode: "IN",
        chart: "mostPopular",
        pageToken: nextPageToken,
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items || [],
        nextPageToken: data.nextPageToken,
        activeCategory: "All",
      },
    });
  } catch (error) {
    dispatch({ type: HOME_VIDEOS_FAIL, payload: error.message });
  }
};

export const getCategoriesVideos = (keyword) => async (dispatch, getState) => {
  console.log(keyword);
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const response = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideo.nextPageToken,
        q: keyword,
        type: "video",
        regionCode: "IN",
      },
    });
    console.log(response);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: response.data.items || [],
        nextPageToken: response.data.nextPageToken,
        activeCategory: keyword,
      },
    });
  } catch (error) {
    dispatch({ type: HOME_VIDEOS_FAIL, payload: error.message });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: id,
      },
    });
    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
