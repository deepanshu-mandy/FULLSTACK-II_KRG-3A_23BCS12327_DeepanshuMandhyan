import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { username, isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default Profile;