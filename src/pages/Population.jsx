import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Population = () => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://cs464p564-frontend-api.vercel.app/api/countries'
        );
        const countries = response.data;
        const data = {
          labels: countries.map((country) => country.name),
          datasets: [
            {
              label: 'Population',
              data: countries.map((country) => country.population),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        };
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountries();

    return () => {
      // Clean up the chart if the component is unmounted or re-rendered
      const chart = chartRef.current;
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1>Population of South America</h1>
      {chartData && <Bar ref={chartRef} data={chartData} />}
    </div>
  );
};

export default Population;
