import React, {useState} from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import {Table} from "./components/Table";
import {ButtonWithUseState} from "./components/ButtonWithUseState/ButtonWithUseState";
import {Money} from "./components/Money";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]



function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
  const function1=(subscriber:string,age:number)=>{
      console.log(subscriber,age)
  }
    const function2=(subscriber:string,age:number)=>{
        console.log(subscriber,age)
    }

    return (
    <div>
      <Table topCars={topCars}/>
        <Button name={"Button 1"} callBack={()=>function1("Sanya",21)}/>
        <Button name={"Button 2"} callBack={()=>function2("Valerka",22)}/>
        <ButtonWithUseState/>
        <Money money={money}/>
    </div>
  );
}

export default App;
