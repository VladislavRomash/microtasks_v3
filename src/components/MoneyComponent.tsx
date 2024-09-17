import React, {useState} from 'react';
import {Money} from '../App';
import {Button} from './Button';

type MoneyComponentProps = {
    money: Money[]
}

type Filter = 'Dollars' | 'RUBLS' | 'All'

export const MoneyComponent = ({money}: MoneyComponentProps) => {

    let [filter, setFilter] = useState<Filter>('All')

    const changeFilterHandler = (button: Filter) => {
        setFilter(button)
    }

    const filteredMoney = () => {
        if (filter === 'RUBLS') return money.filter(f => f.banknots === 'RUBLS')
        if (filter === 'Dollars') return money.filter(f => f.banknots === 'Dollars')
        else return money
    }

    return (
        <div>
            <ul>
                {
                    filteredMoney().map(m => {
                        return (
                            <li key={m.number}>
                                {m.banknots}: {m.value}
                            </li>
                        )
                    })
                }
            </ul>
            <Button callback={() => changeFilterHandler('All')} text={'All'}/>
            <Button callback={() => changeFilterHandler('Dollars')} text={'Dollars'}/>
            <Button callback={() => changeFilterHandler('RUBLS')} text={'RUBLS'}/>
        </div>
    );
};