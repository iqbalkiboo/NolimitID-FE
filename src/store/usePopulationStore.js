import { create } from "zustand";
import axios from "axios";

const usePopulationStore = create((set) => ({
  source: null,
  population: [],
  filteredPopulation: [],
  years: [],
  loading: false,

  fetchPopulationData: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const raw = res.data.data;

      // console.log("Raw data:", raw);

      const sorted = raw.sort((a, b) => a.Year - b.Year);

      set({
        source: res.data.source[0],
        population: sorted,
        filteredPopulation: sorted,
        years: sorted.map((item) => item.Year),
        loading: false,
      });
    } catch (error) {
      console.error("Fetch error:", error);
      set({ loading: false });
    }
  },

  filterByYearRange: (startYear, endYear) =>
    set((state) => {
      const filtered = state.population.filter(
        (item) => item.Year >= startYear && item.Year <= endYear
      );
      return { filteredPopulation: filtered };
    }),
}));

export default usePopulationStore;

