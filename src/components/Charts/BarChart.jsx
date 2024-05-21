import React, { Component } from "react";
import Chart from "react-apexcharts";
import "../../assets/ApexChart.css";
import defaultProps from '../Data/defaultProps';

/* 
Usage:

const categories = [
  "Category1",
  "Category2",
  "Category3",
  "Category4",
  "Category5",
];
const data = [10, 20, 30, 40, 50];

<BarChart categories={categories} data={data} />;
*/

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: "#f4f4f440",
        },
        xaxis: {
          categories: props.categories || defaultProps.categories,
        },
        plotOptions: {
          bar: {
            distributed: true
          }
          
        },
        legend: {
          show: false
        },

      },
      series: [
        {
          name: "You",
          data: props.data || defaultProps.data,
        },
      ],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.categories !== prevState.options.xaxis.categories ||
      nextProps.data !== prevState.series[0].data
    ) {
      return {
        options: {
          ...prevState.options,
          xaxis: {
            categories:
              nextProps.categories || defaultProps.categories,
          },
        },
        series: [
          {
            ...prevState.series[0],
            data: nextProps.data || defaultProps.data,
          },
        ],
      };
    }
    return null;
  }

  render() {
    return (
      <div className="ApexChart">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={400}
            />
          </div>
        </div>
      </div>
    );
  }
}

BarChart.defaultProps = defaultProps;

export default BarChart;
