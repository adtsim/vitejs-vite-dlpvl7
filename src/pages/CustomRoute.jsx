import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CustomRoute = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://cs464p564-frontend-api.vercel.app/api/countries')
      .then((response) => {
        const data = response.data;
        setChartData({
          labels: data.map((country) => country.name),
          datasets: [
            {
              label: 'GDP in Billions',
              data: data.map((country) => country.gdp_billions),
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        });
      })
      .catch((err) => {
        console.error('Error fetching GDP data:', err);
        setError('Failed to load GDP data');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>GDP of South American Countries</h1>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true,
            },
            title: {
              display: true,
              text: 'Comparison of GDP Across South American Countries',
            },
          },
        }}
      />
    </div>
  );
};

export default CustomRoute;
