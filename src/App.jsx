import PopulationInfo from "./components/PopuationInfo";
import PopulationChart from "./components/PopulationChart";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          US Population Data
        </h1>
        <PopulationInfo />
        <PopulationChart />
      </div>
    </div>
  );
}
