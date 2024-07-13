import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../ActionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

export const homeVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state.activeCategory, "   ", payload?.activeCategory)
  console.log(payload);
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return { ...state, loading: true };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.activeCategory
            ? [ ...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.activeCategory,
      };
    case HOME_VIDEOS_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
