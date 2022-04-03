import React from 'react'
import {Doughnut} from "react-chartjs-2"
// import { Chart as ChartJS } from 'chart.js/auto'

const PieholeChart = ({graphData}) => {
  return (
    <div>
        <Doughnut
            data={{
                labels: graphData.labels,
                datasets: graphData.datasets
            }}

            height={250}

            options={{
                    // responsive: false,
                    maintainAspectRatio: false,
                } 
            }>
        </Doughnut>
    </div>
  )
}

export default PieholeChart