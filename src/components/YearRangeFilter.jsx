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
      if (parseInt(endYear) < parseInt(startYear)) {
        alert("Tahun Akhir tidak boleh lebih kecil dari Tahun Awal!");
        return;
      }
      filterByYearRange(startYear, endYear); 
  };

  return (
    <div className="p-4">
      <h3 className="text-md font-semibold mb-2">Filter Tahun</h3>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="startYear">Tahun Awal:</label>
          <select
            id="startYear"
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
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="endYear">Tahun Akhir:</label>
          <select
            id="endYear"
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
        </div>
        <button
          onClick={handleFilter}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm w-full sm:w-auto"
        >
          Terapkan
        </button>
      </div>
    </div>
  );
}
