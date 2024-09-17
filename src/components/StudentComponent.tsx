import React from 'react';
import {Students} from '../App';

type NewComponentsProps = {
    students: Students[]
}

export const StudentComponent = ({students}: NewComponentsProps) => {
    return (
        <div>
            <table style={{border: '1px solid black'}}>
                <tr>
                    <td style={{borderLeft: '1px solid black', borderBottom: '1px solid black'}}>ID of student</td>
                    <td style={{borderLeft: '1px solid black', borderBottom: '1px solid black'}}>Name of student</td>
                    <td style={{borderLeft: '1px solid black', borderBottom: '1px solid black'}}>Age of student</td>
                </tr>
                {
                    students.map(m => {
                        return (
                            <tr key={m.id}>
                                <td style={{borderLeft: '1px solid black'}}>{m.id}</td>
                                <td style={{borderLeft: '1px solid black'}}>{m.name}</td>
                                <td style={{borderLeft: '1px solid black'}}>{m.age}</td>
                            </tr>
                        )
                    })
                }
            </table>

        </div>
    );
};