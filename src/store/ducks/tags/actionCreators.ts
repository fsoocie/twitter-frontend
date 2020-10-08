import { Action } from 'redux';
import { LoadingState, TagsState } from './contracts/state';

export enum TagsActionsType {
  SET_ITEMS = 'tags/SET_ITEMS',
  FETCH_ITEMS = 'tags/FETCH_ITEMS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_ITEMS;
  payload: TagsState['items'];
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_ITEMS;
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_ITEMS,
  payload,
});

export const setTagsLoadingState = (
  payload: LoadingState,
): SetTagsLoadingStateActionInterface => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_ITEMS,
});

export type TagsActions =
  | SetTagsActionInterface
  | FetchTagsActionInterface
  | SetTagsLoadingStateActionInterface;
