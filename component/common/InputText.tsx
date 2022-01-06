import React, { FC, ChangeEvent } from 'react'

interface InputTextProps {
    label: string,
    name: string,
    placeholder?: string,
    forHtml: string,
    onChangeHandler: Function
    value: any
}

const InputText: FC<InputTextProps> = ({ label, name, placeholder, forHtml, onChangeHandler, value }) => {
    return <>
        <div className="input-container">
            <label htmlFor={forHtml}>
                {label}
            </label>
            <input onChange={(e) => onChangeHandler(e)} value={value} name={name} type="text" placeholder={placeholder || ""} id={forHtml} />
        </div></>
}

export default InputText