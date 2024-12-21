import React, {useState} from 'react';
import './App.css';
import {UniversalInput} from './components/UniversalInput';
import {Button} from './components/Button';
import {FullInput} from './components/FullInput';
import {StudentComponent} from './components/StudentComponent';
import {CarComponent} from './components/CarComponent';
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

    const [students, setStudents] = useState<Students[]>([
            {id: 1, name: 'Igor', age: 20},
            {id: 2, name: 'Svetlana', age: 27},
            {id: 3, name: 'Ann', age: 45},
            {id: 4, name: 'Max', age: 17},
            {id: 5, name: 'Nick', age: 33},
        ]
    )
    const [topCars, setTopCars] = useState<Cars[]>([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ])

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

    const [count, setCount] = useState<number>(0)

    const [inputValue, setInputValue] = useState<string>('')

    const addNewCar = () => {
        const newCar: Cars = {manufacturer: inputValue, model: `${prompt('Enter model car')}`}
        setTopCars([...topCars, newCar])
        setInputValue('')
    }

    const addNewStudent = (nameStudent: string) => {
        const newStudent = {id: students.length + 1, name: nameStudent, age: Math.round(Math.random() * 10)}
        setStudents([...students, newStudent])
    }

    return (
        <div className="App">
            <StudentComponent students={students}/>
            <FullInput addNewStudent={addNewStudent}/>

            <div>
                <CarComponent cars={topCars}/>
                <UniversalInput value={inputValue} setInputValue={setInputValue}/>
                <Button text={'add'} callback={addNewCar}/>
            </div>

            <div>
                <Button callback={() => setCount(count + 1)} text={'Add'}/>: {count}
            </div>

            <MoneyComponent money={money}/>

        </div>
    );
}

export default App;
