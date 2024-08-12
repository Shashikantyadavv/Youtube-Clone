import { CHANNEL_DETAIL_FAIL, CHANNEL_DETAIL_REQUEST, CHANNEL_DETAIL_SUCCESS } from "../ActionType";

const initialState = {
  loading: false,
  data: null,
};

export const channelDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANNEL_DETAIL_REQUEST:
      return { ...state, loading: true };
    case CHANNEL_DETAIL_SUCCESS:
      return { ...state, loading: false, data: payload };
    case CHANNEL_DETAIL_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
