import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects'
import { incrementSagaLoading, incrementSagaSuccess } from './counterSlice';

function* handleCouterSaga(action: PayloadAction<number>) {
    delay(1000) //await 1s
    console.log('action', action);
    // use effect creator put dispatch action success
    yield put(incrementSagaSuccess(action.payload))
}

export function* counterSaga() {
    console.log('counterSaga saga');
    yield takeEvery(incrementSagaLoading.toString(), handleCouterSaga)
}