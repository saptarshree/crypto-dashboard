
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const CryptoPieChart = () => {
  return (
    <div className="border shadow-md  rounded-md relative h-64 bg-white    container top-2 ">
      <div className="relative top-4 ">
      <h1 className="text-green-500 font-bold  text-xl">PortFolio</h1>
        
      </div>
      <div className=""> 
      {/* Pie Chart */}
        <Pie data={{
  labels: ['Tether', 'Luna', 'Ethereum'],
  datasets: [
    {
      label: 'PortFolio',
      data: [250, 400, 350],
      backgroundColor: [
        '#14C38E',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',      
      ],
      borderColor: [
        '#14C38E',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1,
    },
  ],
}} plugins={[ChartDataLabels]}  options={{maintainAspectRatio: false ,plugins: {
  legend: {
    display: true,
    position:"right",
    labels: {
      usePointStyle: true,
      pointStyle: "circle"
      // boxWidth: 5
    }
  },
  
  datalabels: {
    display: true,
    color: "white",
    align: "center",
    padding: {
      right: 2
    },
    labels: {
      title: {
        font: {
          weight: "bold",
          size:18
        }
      },
    },}
}}}/>
      </div>
    </div>
  )
}

export default CryptoPieChart;



