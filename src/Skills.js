import './Skills.css';
import './index.css';
import React, {Component} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const codeSkills = {

  labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular','PHP','Python','C','C#','MySQL'],
  datasets: [
    {
      backgroundColor: ['#EF626C', '#78CDD7', '#78CDD7', '#44A1A0', '#44A1A0', '#EF626C','#78CDD7', '#287574', '#287574', '#EF626C'],
      data: [90, 80, 75, 50, 50, 90, 70, 40, 40, 85],
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title:{
      display:false,
    },
    tooltip: {
      events: []
    }
  },
  color: 'white',
  borderRadius: {
    topLeft: 35,
    topRight: 30,
  },
  scales:{
    x: {
      ticks: {
        color: 'white',
        font: {
          family: 'Amatic SC',
          size: 22,
          weight: 900
        }
      },
      grid: {
        display: false,
      }
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        color:  ["white","#0D5C63","#0D5C63","#0D5C63","#0D5C63","#0D5C63","#0D5C63","#0D5C63", "#0D5C63","#0D5C63"],
        lineWidth: 3,
        drawTicks: false,
      }
    }
  }
}


class Skills extends Component{

  render() {  
  return (
    <div className="Skills page-content">
      <div id="page-wrap">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/> 
        <header className="page-header">
          <h2>Skills</h2>
        </header>
        <div className="skills-chart">
        <Bar
          data={codeSkills}
          options={chartOptions}
        />
        </div>
      </div>
    </div>
  );
}
}
export default Skills;
