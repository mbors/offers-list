import { LoaderAction } from './../../ui/elements/Loader/redux/loader.actions';
import { OffersActions } from './offer.actions';
import { takeLatest, put } from 'redux-saga/effects';
import OfferController from './offer.controller';
import { Action } from 'redux-actions';
import { toastr } from 'react-redux-toastr';

function* getOffers() {
    yield put(LoaderAction.setVisbility(true))
    try {
        const offers = yield OfferController.getInstance().getOffers()
        yield put(OffersActions.setOffers(offers))
    } catch (error) {
        toastr.error('Error', error.message)
    }
    yield put(LoaderAction.setVisbility(false))
}

function* acceptOffer(action: Action<string>) {
    const customerId = action.payload
    yield put(LoaderAction.setVisbility(true))
    try {
        yield OfferController.getInstance().acceptOffer(customerId)
        toastr.success('Success', 'The offer has been accepted successfully')
        yield put(OffersActions.getOffers())
    } catch (error) {
        toastr.error('Error', error.message)
    }
    yield put(LoaderAction.setVisbility(false))
}

export default function* () {
    yield takeLatest(OffersActions.Type.GET_OFFERS, getOffers)
    yield takeLatest(OffersActions.Type.ACCEPT_OFFER, acceptOffer)
}


