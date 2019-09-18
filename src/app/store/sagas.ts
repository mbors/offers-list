import { fork, all } from 'redux-saga/effects'
import offerSagas from './offer/offer.sagas';

const sagas = [
  offerSagas
] 

// Register all your watchers
export default function* root() {
    yield all(sagas.map(saga => fork(saga)))
}
