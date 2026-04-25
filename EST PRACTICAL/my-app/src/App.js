import React from "react";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  const userData = {
    username: "Deepanshu",
    isLoggedIn: true,
  };

  return (
    <UserContext.Provider value={userData}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;