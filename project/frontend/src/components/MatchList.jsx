// components/MatchList.jsx
import MatchCard from "./MatchCard";

const MatchList = ({ matches }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
};

export default MatchList;