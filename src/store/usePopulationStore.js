import { create } from "zustand";
import axios from "axios";

const usePopulationStore = create((set) => ({
  source: null,
  population: [],
  loading: false,
  fetchPopulationData: async () => {
    set({ loading: true });
    try {
      const res = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      set({
        source: res.data.source[0],
        population: res.data.data,
        loading: false,
      });
    } catch (error) {
      console.error("Fetch error:", error);
      set({ loading: false });
    }
  },
}));

export default usePopulationStore;
