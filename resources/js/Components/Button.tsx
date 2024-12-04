import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {

    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}