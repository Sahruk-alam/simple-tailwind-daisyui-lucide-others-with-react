import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataS=use(marksPromise)
    const marksData=marksDataS.data;
    const marksChart=marksData.map(marks=> {
        const student = {
            id:marks.id,
            name:marks.name,
            science:marks.marks.Science,
            math:marks.marks.Mathematics 
        }
        const avg=(student.science+student.math)/2;
        student.avg=avg;
        return student;
    })
    console.log(marksChart);
    return (
        <div>
            <BarChart width={500} height={300} data={marksChart}>
               <XAxis dataKey='name'  />
               <YAxis></YAxis>
               <Bar dataKey='science' fill='gray'></Bar>
               <Tooltip></Tooltip>
               {/* <Bar dataKey='math' fill='green'></Bar> */}
               {/* <Bar dataKey='avg' fill='red'></Bar> */}
            </BarChart>
        </div>
    ); 
};

export default MarksChart;