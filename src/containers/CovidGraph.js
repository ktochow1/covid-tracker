import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'

function GlobalCovid(props){
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ["dayBeforeYesterday", "yesterday", "today"],
            datasets: [
                {
                    label: 'Covid Deaths',
                    data: [1, 2, 3, 4],
                    backgroundColor: ['rgba(192, 30, 19, 0.6)'],
                    borderWidth: 2

                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])
    return(
        <div>
            <h2>Global Covid Deaths</h2>
            <div style={{height: '700px', width: '700px', margin: '15px 0px 0px 0px'}}>
                <Line data={chartData} options={{
                    responsive: true,
                    title: {text: 'oo', display: true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }}/>
            </div>
            {/* <Chart data={data} axes={axes} /> */}
            
        </div>
    )
}

export default GlobalCovid