import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ graphData }) => {
  return (
    <div>
        <Line
            data={{
                labels: graphData.labels,
                datasets: graphData.datasets
            }}
            
            height={250}
            // width={600}
            options={{
                    // responsive: false,
                    maintainAspectRatio: false,
                    
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                } 
            }
        >
        </Line>
    </div>
  )
}

export default LineChart