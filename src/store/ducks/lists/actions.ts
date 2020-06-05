import { action } from 'typesafe-actions';
import { ListsTypes, List } from './types';

export const loadRequest = () => action(ListsTypes.LOAD_REQUEST);

export const loadSuccess = (data: List[]) => action(ListsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ListsTypes.LOAD_FAILURE);