import './balance.css'
import React from "react";
import {BarChart} from '@mui/x-charts/BarChart';
import {PieChart} from '@mui/x-charts/PieChart';
import {ScatterChart} from '@mui/x-charts/ScatterChart';


import Navegacion from "../../componentes/navegacion/navegacion.jsx";

function Balance() {

    return (
        <>
            <Navegacion/>
            <h1>Balance</h1>
            <ScatterChart
                width={500}
                height={300}
                series={[{
                    data: [
                        {x: 100, y: 200, id: 1},
                        {x: 120, y: 100, id: 2},
                        {x: 170, y: 300, id: 3},
                        {x: 140, y: 250, id: 4},
                        {x: 150, y: 400, id: 5},
                        {x: 110, y: 280, id: 6},
                    ], label: 'pv', id: 'pvId'
                }]}
                xAxis={[{min: 0}]}
            />
            <br/>
            <br/>
            <BarChart
                series={[
                    {data: [35, 44, 24, 34]},
                    {data: [51, 6, 49, 30]},
                    {data: [15, 25, 30, 50]},
                    {data: [60, 50, 15, 25]},
                ]}
                height={290}
                xAxis={[{data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band'}]}
                margin={{top: 10, bottom: 30, left: 40, right: 10}}
            />
            <br/>
            <br/>
            <PieChart
                series={[
                    {
                        startAngle: -90,
                        endAngle: 90,
                        data: [
                            {label: 'Group A', value: 400},
                            {label: 'Group B', value: 300},
                            {label: 'Group C', value: 300},
                            {label: 'Group D', value: 200},
                            {label: 'Group E', value: 278},
                            {label: 'Group F', value: 189},
                        ],
                    },
                ]}
                height={300}
            />
        </>
    )
}

export default Balance
