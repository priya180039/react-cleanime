import React, { createContext, useContext, useState } from "react";

const StaticContext = createContext();

export const StaticProvider = ({ children }) => {
  const [topAnime, setTopAnime] = useState([]);
  const [currentAnime, setCurrentAnime] = useState([]);
  const [upcomingSeason, setUpcomingSeason] = useState([]);
  return (
    <StaticContext.Provider
      value={{
        topAnime,
        setTopAnime,
        currentAnime,
        setCurrentAnime,
        upcomingSeason,
        setUpcomingSeason,
      }}
    >
      {children}
    </StaticContext.Provider>
  );
};

export const useStatic = () => {
  return useContext(StaticContext);
};

export default StaticContext;
