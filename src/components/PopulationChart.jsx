import usePopulationStore from "../store/usePopulationStore";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import YearRangeFilter from "./YearRangeFilter";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function PopulationChart() {
  // const populations = usePopulationStore((s) => s.population);
  const populations = usePopulationStore((s) => s.filteredPopulation);


  if (!populations.length) return null;

  const chartData = {
    labels: populations.map((item) => item.Year),
    datasets: [
      {
        label: "Population",
        data: populations.map((item) => item.Population),
        borderColor: "#2563eb",
        backgroundColor: "#93c5fd",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Population per Year</h2>
      <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <YearRangeFilter />
      </div>
      <div className="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="mb-6">
          <label className="font-semibold mb-4">Line Chart</label>
        </div>
        <Line data={chartData} />
      </div>
      <div className="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="mb-6">
          <label className="font-semibold mb-4">Pie Chart</label>
        </div>
        <Pie data={chartData} />
      </div>
    </div>
  );
}
