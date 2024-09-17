import React, {useState} from 'react';
import './App.css';
import {StudentComponent} from './components/StudentComponent';
import {CarComponent} from './components/CarComponent';
import {Button} from './components/Button';
import {MoneyComponent} from './components/MoneyComponent';

export type Students = {
    id: number;
    name: string;
    age: number;
}

export type Cars = {
    manufacturer: string
    model: string
}

export type Money = {
    banknots: 'Dollars' | 'RUBLS'
    value: number
    number: string
}

function App() {

    const students: Students[] = [
        {id: 1, name: 'Igor', age: 20},
        {id: 2, name: 'Svetlana', age: 27},
        {id: 3, name: 'Ann', age: 45},
        {id: 4, name: 'Max', age: 17},
        {id: 5, name: 'Nick', age: 33},
    ]

    const topCars: Cars[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const onClickHandler = (value: string) => {
        console.log(value)
    }

    const [count, setCount] = useState<number>(0)

    const money: Money[] = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]


    return (
        <div className="App">
            <StudentComponent students={students}/>
            <CarComponent cars={topCars}/>

            <div>
                <div>
                    <Button callback={() => onClickHandler('Igor')}
                            text={'Subscribe'}/>
                </div>
                <div>
                    <Button callback={() => onClickHandler('Ivan')}
                            text={'Subscribe'}/>
                </div>

            </div>

            <div>
                <Button callback={() => setCount(count + 1)} text={'Add'}/>: {count}
            </div>

            <MoneyComponent money={money}/>

        </div>
    );
}

export default App;
