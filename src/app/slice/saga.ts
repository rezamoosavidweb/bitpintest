import { put, delay, takeEvery } from 'redux-saga/effects';
import { rootActions as actions } from '.';
import { toast } from 'react-toastify';

/**
 * App request/response handler
 */
export function* closeAndRemoveDialogSaga(action) {
    try {
        yield put(actions.closeDialog(action?.payload));
        yield delay(500);
        yield put(actions.removeDialog(action?.payload));
    } catch (err: any) {
        toast.error('درخواست شما با خطا مواجه شده است');
    }
}
/**
 * Root saga manages watcher lifecycle
 */
export function* appSaga() {
    // Watches for loadRepos actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount
    yield takeEvery(actions.closeAndRemoveDialog.type, closeAndRemoveDialogSaga);
}
