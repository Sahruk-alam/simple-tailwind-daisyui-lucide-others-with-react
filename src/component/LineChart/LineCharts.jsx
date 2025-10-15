import { X } from 'lucide-react';
import React from 'react';
import { BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 1400, amt: 1200 },
    { name: 'Page B', uv: 300, pv: 2067, amt: 2500 },
    { name: 'Page C', uv: 300, pv: 2567, amt: 1600 },
    { name: 'Page D', uv: 100, pv: 2227, amt: 2200 },
    { name: 'Page E', uv: 400, pv: 2567, amt: 2400 },
    { name: 'Page F', uv: 500, pv: 1167, amt: 2000 },
    { name: 'Page G', uv: 600, pv: 2167, amt: 100 },
];
const LineCharts = () => {
    return (
        <div>
            <LineChart width={500} height={300} data={data}>
                 <XAxis dataKey='name'  />
                 <CartesianGrid/>
                <YAxis dataKey={'pv'}></YAxis>
                <Line dataKey='uv' stroke='gray'> </Line>
                <Line dataKey='pv' stroke='green'> </Line>
                <Line dataKey='amt' stroke='red'> </Line>
                
            </LineChart>
        </div>
    );
};

export default LineCharts;