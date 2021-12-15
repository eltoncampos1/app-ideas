import { FormEvent, useState } from 'react'
import './App.css'
import { Input } from './components/Input'

function App() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')


  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (value.match(/^[0-1]+$/g) === null) {
      alert('Enter only 0 or 1')
      setValue('')
      return
    }
    const reverse = value.split('').map(Number).reverse()

    const bin = reverse.reduce((acc, curr, idx) => acc + curr * Math.pow(2, idx))

    setResult(String(bin))
  }


  return (
    <div className="App">
      <h1 className='title'>Bin2Dec</h1>
      <form className="form" onSubmit={onSubmit}>

        <Input value={value} onChange={(e) => setValue(e.target.value)} />

        <input className='submit' type="submit" />
      </form>
      <br />
      <h3 className='result'>Seu numero convertido é : <span> {result && result} </span></h3>
    </div>
  )
}

export default App
