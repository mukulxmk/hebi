import mockMatches from "../data/matches.js";

export const getMockLiveMatches = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockMatches });
    }, 800);
  });
};