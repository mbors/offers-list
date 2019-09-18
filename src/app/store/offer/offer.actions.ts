import { createAction } from 'redux-actions'
import { Omit } from 'react-redux';

export namespace OffersActions {
    export enum Type {
        GET_OFFERS = 'GET_OFFERS',
        SET_OFFERS = 'SET_OFFERS', 
        ACCEPT_OFFER = 'ACCEPT_OFFER'
    }
    export const getOffers = createAction(Type.GET_OFFERS)
    export const setOffers = createAction(Type.SET_OFFERS)
    export const acceptOffer = createAction(Type.ACCEPT_OFFER)
}

export type ImportActions = Omit<typeof OffersActions, 'Type'>
