import React, { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple"]);

  useEffect(() => {
    localStorage.setItem("watchlist", watchList);
  }, [watchList]);

  const handleDelete = (id) => {
    setWatchList(
      watchList.filter((coin) => {
        return coin !== id;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, handleDelete }}>
      {children}
    </WatchListContext.Provider>
  );
};
