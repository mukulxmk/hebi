// components/MatchCard.jsx
const MatchCard = ({ match }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-bold">
        {match.team1} vs {match.team2}
      </h2>

      <p className="mt-2">
        {match.score1} / {match.score2}
      </p>

      <p className="text-sm text-gray-400">
        {match.status}
      </p>
    </div>
  );
};

export default MatchCard;