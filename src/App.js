import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

const fakeUser = {
  username: "Audrey Hepburn",
  isAuthenticated: true,
  profileImageUrl:
    "https://thetecheducation.com/wp-content/uploads/2020/04/Audrey-Hepburn-1.jpg",
};

function App() {
  const [currentUser, setCurrentUser] = useState(fakeUser);
  return (
    <div className="onboarding">
      <Navbar
        logout={() => setCurrentUser({ isAuthenticate: false })}
        login={() => setCurrentUser(fakeUser)}
        currentUser={currentUser}
      />
      <Homepage currentUser={currentUser} />
    </div>
  );
}

export default App;
