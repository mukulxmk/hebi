import {useLiveMatches} from '../hooks/useLiveMatches.jsx';
import MatchList from '../components/MatchList.jsx';

const Home = () => {
  const { matches, loading, source } = useLiveMatches();

  if (loading) return <p>Loading matches...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Live Matches</h1>

      {source === "mock" && (
        <p className="text-yellow-500 text-sm mb-4">
          ⚠ Showing demo data (backend unavailable)
        </p>
      )}

      <MatchList matches={matches} />
    </div>
  );
};

export default Home;