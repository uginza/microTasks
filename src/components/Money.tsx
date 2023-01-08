import React from 'react';

type Money = {
    money: MoneyType[];
}
type MoneyType = {
    banknots: string
    value: number
    number: string
}

export function Money(props: Money) {
    return (
        <ul>
            {props.money.map((MoneyObj,index) => {
                return (
                    <li key={index}>
                        <span>{MoneyObj.banknots} </span>
                        <span>{MoneyObj.value} </span>
                        <span>{MoneyObj.number} </span>
                    </li>

                )
            })}
        </ul>
    )
}
