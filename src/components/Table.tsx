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
            <tr>
                {props.topCars.map((TopCarsObj) => {
                    return (<td>{TopCarsObj.manufacturer}</td>)
                })
                }
            </tr>
            <tr>
                {props.topCars.map((TopCarsObj) => {
                    return (<td>{TopCarsObj.model}</td>)
                })
                }
            </tr>
        </table>
    )
}