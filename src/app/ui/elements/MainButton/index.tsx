import * as React from 'react';
import './style.css';

export interface MainButtonProps {
    label: string
    onClick?: Function
}

export const MainButton = (props: MainButtonProps) => {
    const { label, onClick } = props;
    return (
        <button className="main-button" onClick={() => onClick && onClick()} >
            <span className="main-button-label">
                {label}
            </span>
        </button>
    )
