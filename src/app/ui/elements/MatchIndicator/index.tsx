import * as React from 'react'
import './style.css'

export type MatchIndicatorType = 'active' | 'warning'

export interface MatchIndicatorProps {
    type: MatchIndicatorType
}

export const MatchIndicator = (props: MatchIndicatorProps) => {
    const { type } = props;
    const cls = `statusIndicator ${type}`
    return (
        <div className="statusIndicatorContainer">
            <div className={cls} />
        </div>
    )
}
