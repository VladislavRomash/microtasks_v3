import React from 'react';
import './App.css';
import {StudentComponent} from './components/StudentComponent';
import {CarComponent} from './components/CarComponent';
import {Button} from './components/Button';

export type Students = {
    id: number;
    name: string;
    age: number;
}

export type Cars = {
    manufacturer: string
    model: string
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

        </div>
    );
}

export default App;
