import { call, put, takeEvery } from 'redux-saga/effects';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreators';
import { LoadingState } from './contracts/state';
import { tagsApi } from '../../../services/api/tagsApi';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(tagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_ITEMS, fetchTweetsRequest);
}
