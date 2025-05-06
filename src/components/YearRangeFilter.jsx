import usePopulationStore from "../store/usePopulationStore";
import { useState, useEffect } from "react";

export default function YearRangeFilter() {
  const { years, filterByYearRange } = usePopulationStore();
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  useEffect(() => {
    if (years.length) {
      setStartYear(years[0]);
      setEndYear(years[years.length - 1]);
      filterByYearRange(years[0], years[years.length - 1]);
    }
  }, [years]);

  const handleFilter = () => {
    if (startYear && endYear) {
      filterByYearRange(startYear, endYear);
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-md font-semibold mb-2">Filter Tahun</h3>
      <div className="flex gap-2 items-center">
        <label htmlFor="startYear">Tahun Awal:</label>
        <select
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <label htmlFor="startYear">Tahun Akhir:</label>
        <select
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Terapkan
        </button>
      </div>
    </div>
  );
}
