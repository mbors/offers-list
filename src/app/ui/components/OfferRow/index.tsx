import * as React from 'react';
import './style.css'
import { ClientData } from '../ClientData'
import { Amount } from '../../elements/Amount';
import { MainButton } from '../../elements/MainButton';

export interface OfferRowProps {
    contractPrice: number;
    customerId: string;
    customerName: string
    customerCompany: string
    scheduleMatch: boolean
    inactive?: boolean
    acceptOffer?: Function
}

export const OfferRow = (props: OfferRowProps) => {
    const { customerId, contractPrice, inactive, acceptOffer, ...pProps } = props
    return (
        <div className="offer-row">
            <ClientData {...pProps} inactive={inactive} />
            <div className="price-button-wrapper">
                <Amount amount={contractPrice} />
                {!inactive && <MainButton onClick={() => acceptOffer && acceptOffer(customerId)} label="Accept" />}
            </div>
        </div>
    )
}
