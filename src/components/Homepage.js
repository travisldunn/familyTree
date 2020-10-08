import React from "react";
import UserDash from "./UserDash";

const Homepage = ({ currentUser }) => {
  console.log(currentUser);
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Hi there</h1>
        <h4>New to Family Tree?</h4>
        <a href="/signup" className="btn btn-primary">
          Sign up here
        </a>
      </div>
    );
  }
  return (
    <div>
      <UserDash currentUser={currentUser} />
    </div>
  );
};

export default Homepage;
