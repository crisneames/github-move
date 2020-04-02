import React, { Component } from 'react';
import Chart from 'chart.js'
import Config from './Config';

class LineChart extends Component {
    componentDidMount () {
        this.getData(this.props.id)
    }
    async getData (id) {
      try{
        const response = await fetch(`${Config.baseURL}/ice_creams/${id}`);
        const iceCream = await response.json()
        const preparedData = await this.prepareData(iceCream)
        await this.createChart(preparedData)
      } catch(err){
        console.log(err)
      }
    }
    prepareData (data) {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Pints Sold',
                    data: []
                }
            ]
        }

        data.pints.forEach(pint => {
            chartData.labels.push(pint.month)
            chartData.datasets[0].data.push(pint.pints_sold)
        })
        return chartData
    }
    createChart (data) {
        const ctx = document.querySelector(`#pints-${this.props.id}`)
        const pintsChart = new Chart(ctx, {
            type: 'line',
            data: data
                })
        return pintsChart
    }
  render () {
    return (
      <>
        <h1>Ice Creams</h1>
        <canvas id={`pints-${this.props.id}`} width="300" height="100"></canvas>
      </>
    )
  }
}

export default LineChart
