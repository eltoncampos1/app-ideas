import styled from './style.module.css'

type InputProps = {
    value: string
    onChange: (e: any) => void
}

export const Input = ({ value, onChange }: InputProps) => {
    return (
        <input autoFocus className={styled.input} onChange={onChange} value={value} type="text" placeholder="Digite seu binário" />
    )
}