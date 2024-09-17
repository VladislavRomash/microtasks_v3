import React from 'react';
import {Cars} from '../App';

type CarComponentProps = {
    cars: Cars[]
}

export const CarComponent = ({cars}: CarComponentProps) => {
    return (
        <div>
            <table style={{border: '1px solid black', marginTop: '10px'}}>
                <tr>
                    <td style={{borderLeft: '1px solid black', borderBottom: '1px solid black'}}>Manufacturer</td>
                    <td style={{borderLeft: '1px solid black', borderBottom: '1px solid black'}}>Model</td>
                </tr>
                {cars.map((m, i) => {
                    return (
                        <tr key={i}>
                            <td style={{borderLeft: '1px solid black'}}>{m.manufacturer}</td>
                            <td style={{borderLeft: '1px solid black'}}>{m.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};