import React from 'react';
import { BarChart, Bar,ResponsiveContainer,CartesianGrid,XAxis,YAxis } from 'recharts';
import chartData from "./pie.json";

import BrowserUpdatedRoundedIcon from '@mui/icons-material/BrowserUpdatedRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Data from "./pie.json";


export default function Bargraph(){
  return(
    <div className="apply">
      <div className="header">
        <div className="appliedIcon"><BrowserUpdatedRoundedIcon sx={{color:'tomato',backgroundColor:'whitesmoke',borderRadius:'4px'}}/></div> <h3> Total Applicants </h3> <MoreVertRoundedIcon/>
      </div>
      <div className="chart">
      <div className="barchart">  
        <p>500  <span>+22</span> </p>
        <div style={{marginLeft:'70px'}}>
        <BarChart width={350} height={150} data={Data}>
        <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="applicants" fill="#8884d8" />
        </BarChart>
        </div>
       </div>
      </div>
    </div>
  )
}