import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import {Table} from "./components/Table";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
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
    </div>
  );
}

export default App;
