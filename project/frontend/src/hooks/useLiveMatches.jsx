import { useEffect, useState } from "react";
import { getLiveMatches } from "../services/api.js";
import { getMockLiveMatches } from '../services/mockApi.js'

export const useLiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("real"); // 👈 track source

  const fetchMatches = async () => {
    try {
      const res = await getLiveMatches();
      setMatches(res.data);
      setSource("real");
    } catch (err) {
      console.warn("Real API failed, switching to mock data");

      try {
        const mockRes = await getMockLiveMatches();
        setMatches(mockRes.data);
        setSource("mock");
      } catch (mockErr) {
        console.error("Even mock failed", mockErr);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();

    const interval = setInterval(fetchMatches, 5000);

    return () => clearInterval(interval);
  }, []);

  return { matches, loading, source };
};