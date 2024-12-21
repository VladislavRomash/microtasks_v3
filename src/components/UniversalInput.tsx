import React, {ChangeEvent, FC} from 'react';

type Props = {
    value: string
    setInputValue: (value: string) => void
}

export const UniversalInput: FC<Props> = ({value, setInputValue}) => {

    const currentValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return <input value={value} onChange={currentValue}/>
};