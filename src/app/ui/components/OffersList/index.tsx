import * as React from 'react';
import './style.css'
import { Offer } from '../../../store/offer/offer.model';
import { OfferRow } from '../../components/OfferRow';

export interface OffersListProps {
    offers: Offer[]
    title: string
    inactive?: boolean
    acceptOffer?: Function
}

export const OffersList = (props: OffersListProps) => {
    const { offers, title, ...pProps } = props;
    return (
        <div className="offers-container">
            <p className="offers-list-title">{title}</p>
            <div className="offers-list-container">
                {offers.map(el =>
                    <OfferRow
                        contractPrice={el.contract_price}
                        customerId={el.customer_id}
                        customerName={el.customer_name}
                        customerCompany={el.customer_company}
                        scheduleMatch={el.schedule_matches}
                        {...pProps}
                    />)}
            </div>
        </div>
    )
}
