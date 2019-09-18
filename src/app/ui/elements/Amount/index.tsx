import * as React from 'react';
import './style.css'
export interface AmountProps {
    amount: number
}

export const Amount = (props: AmountProps) => {
    const price = props.amount.toString().replace(/\./g, ',').concat(' €')
    return (
        <div className="amount">{price}</div>)
}

