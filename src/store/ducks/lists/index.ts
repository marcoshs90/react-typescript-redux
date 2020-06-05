import { Reducer } from 'redux';
import { ListsState, ListsTypes } from './types';

const INITIAL_STATE: ListsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ListsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ListsTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ListsTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;