import request from "../../api";
import {
  CHANNEL_DETAIL_FAIL,
  CHANNEL_DETAIL_REQUEST,
  CHANNEL_DETAIL_SUCCESS,
} from "../ActionType";

export const getChannelDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: CHANNEL_DETAIL_REQUEST });
    const { data } = await request("/channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: id,
      },
    });
    console.log(data);
    dispatch({ type: CHANNEL_DETAIL_SUCCESS, payload: data.items[0]});
  } catch (error) {
    dispatch({ type: CHANNEL_DETAIL_FAIL, payload: error });
  }
};
