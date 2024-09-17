import React from 'react';

type ButtonProps = {
    text: string;
    callback: () => void;
}

export const Button = ({text, callback}: ButtonProps) => <button onClick={callback}>{text}</button>