import {
  FETCH_PEOPLES_BEGIN,
  FETCH_PEOPLES_SUCCESS,
  FETCH_PEOPLES_FAILURE,
  IPeopleActions,
} from "./actions";
import { IPeopleState } from "./interface";

const initialState: IPeopleState = {
  people: [],
  loading: false,
  error: null,
};

export default function peopleReducer(
  state: IPeopleState = initialState,
  action: IPeopleActions
) {
  switch (action.type) {
    case FETCH_PEOPLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PEOPLES_SUCCESS:
      return {
        ...state,
        loading: false,
        people: action.peoples,
      };

    case FETCH_PEOPLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
