import { Offer } from './offer.model';
import { OfferState } from './offer.state';
import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux'
import { OffersActions } from './offer.actions';

const initialState: OfferState = {
    offers: [] as Offer[]
}

export const setOffersReducer = (state: OfferState, action: AnyAction) => ({ offers: action.payload }) as OfferState


export const offersReducer = handleActions<OfferState, any>(
    {
        [OffersActions.Type.SET_OFFERS]: setOffersReducer,
    },
    initialState
)
