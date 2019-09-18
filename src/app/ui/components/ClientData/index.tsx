import * as React from 'react';
import { MatchIndicator, MatchIndicatorType } from '../../elements/MatchIndicator';
import './style.css'

export interface ClientDataProps {
    scheduleMatch: boolean
    customerCompany: string
    customerName: string
    inactive?: boolean
}

export const ClientData = (props: ClientDataProps) => {
    const { scheduleMatch, customerCompany, customerName, inactive } = props
    const matchIndicatorType: MatchIndicatorType = scheduleMatch ? 'active' : 'warning'
    return (
        <div className="client-data-container">
            {!inactive && <MatchIndicator type={matchIndicatorType} />}
            <div className="customer-container">
                <span className="customer-company">
                    {customerCompany}
                </span>
                <span className="customer-name">
                    {customerName}
                </span>
            </div>
        </div>
    )
}


