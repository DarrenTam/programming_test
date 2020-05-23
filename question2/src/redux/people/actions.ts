import { IPeople } from "./interface";

export const FETCH_PEOPLES_BEGIN = "FETCH_PEOPLES_BEGIN";
export const FETCH_PEOPLES_SUCCESS = "FETCH_PEOPLES_SUCCESS";
export const FETCH_PEOPLES_FAILURE = "FETCH_PEOPLES_FAILURE";

export const fetchPeoplesBegin = () => ({
  type: FETCH_PEOPLES_BEGIN as "FETCH_PEOPLES_BEGIN",
});

export const fetchPeoplesSuccess = (peoples: IPeople[]) => ({
  type: FETCH_PEOPLES_SUCCESS as "FETCH_PEOPLES_SUCCESS",
  peoples: peoples,
});

export const fetchPeoplesFailure = (error: boolean | null) => ({
  type: FETCH_PEOPLES_FAILURE as "FETCH_PEOPLES_FAILURE",
  error: error,
});

type PeopleActionCreator =
  | typeof fetchPeoplesBegin
  | typeof fetchPeoplesSuccess
  | typeof fetchPeoplesFailure;

export type IPeopleActions = ReturnType<PeopleActionCreator>;
