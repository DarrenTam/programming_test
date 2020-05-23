import { combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { IPeopleState } from "./redux/people/interface";
import { IPeopleActions } from "./redux/people/actions";
import peopleReducer from "./redux/people/reducer";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export interface IRootState{
    people: IPeopleState
}

type IRootActions = IPeopleActions

const rootReducer = combineReducers<IRootState>({
   people : peopleReducer
})

export type ExportThunkDispatch = ThunkDispatch<IRootState, null, IRootActions>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<IRootState, IRootActions, {},{}>(
  rootReducer,
  composeEnhancers(
      applyMiddleware(thunk),
  )
)

export default store
