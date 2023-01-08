import React from 'react';

type TableType = {
    topCars: TopCars[];
}

type TopCars = {
    manufacturer: string;
    model: string;
}

export function Table(props: TableType) {
    return (
        <table>
            <tbody>
            <tr>
                {props.topCars.map((TopCarsObj, index) => {
                    return (<td key={index}>{TopCarsObj.manufacturer}</td>)
                })
                }
            </tr>
            <tr>
                {props.topCars.map((TopCarsObj, index) => {
                    return (<td key={index}>{TopCarsObj.model}</td>)
                })
                }
            </tr>
            </tbody>
        </table>

    )
}