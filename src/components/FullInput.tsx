import React, {FC, useState} from 'react';

type Props = {
    addNewStudent: (nameStudent: string) => void
}

export const FullInput: FC<Props> = ({addNewStudent}) => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onclickHandler = () => {
        addNewStudent(value)
        setValue('')
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
            <button onClick={onclickHandler}>add</button>
        </div>
    );
};