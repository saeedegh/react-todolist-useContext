import React, { useState } from "react";

export const AppContext = React.createContext({
  players: [],
  setPlayers: () => {},
});

function AppContextProvider({ children }) {
  const [players, setPlayers] = useState([]);

  return (
    <AppContext.Provider value={{ players, setPlayers }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
