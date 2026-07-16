import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const AttendanceChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Attendance %",
        data: [90, 95, 88, 97, 91, 93]
      }
    ]
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <h2 className="font-bold text-xl mb-4">Weekly Attendance</h2>
      <Bar data={data} />
    </div>
  );
};

export default AttendanceChart;
