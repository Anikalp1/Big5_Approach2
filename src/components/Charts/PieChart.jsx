import React, { Component } from "react";
import Chart from "react-apexcharts";
import "../../assets/ApexChart.css";
import defaultProps from "../Data/defaultProps";

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

<PieChart categories={categories} data={data} />;
*/

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-pie",
          background: "#f4f4f440",
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: []
            }
          }
        },
        legend: {
          show: false,
        },
        labels: props.categories || defaultProps.categories,
        plotOptions: {
          pie: {
            expandOnClick: true,
          },
        },
      },
      series: props.data || defaultProps.data,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.categories !== prevState.options.labels ||
      nextProps.data !== prevState.series
    ) {
      return {
        options: {
          ...prevState.options,
          labels: nextProps.categories || defaultProps.categories,
        },
        series: nextProps.data || defaultProps.data,
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
              type="pie"
              height={400}
              
            />
          </div>
        </div>
      </div>
    );
  }
}

PieChart.defaultProps = defaultProps;

export default PieChart;
