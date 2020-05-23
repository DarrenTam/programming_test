import { Dispatch } from "redux";
import {
  IPeopleActions,
  fetchPeoplesSuccess,
  fetchPeoplesFailure,
  fetchPeoplesBegin,
} from "./actions";
import { API_END_POINT } from "../../utils/Config";
import axios from "axios";

export function getPeopleInfo() {
  return async (dispatch: Dispatch<IPeopleActions>) => {
    try {
      dispatch(fetchPeoplesBegin());

      const response = await axios(`${API_END_POINT}json/get/41P1_UhSI`, {
        method: "get",
      });

      const success = await response.data;

      if (success) {
        dispatch(fetchPeoplesSuccess(response.data));
      }
    } catch {
      dispatch(fetchPeoplesFailure(true));
    }
  };
}
