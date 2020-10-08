import React from "react";
import DefaultProfileImg from "../images/default-profile-image.png";

const Relation = ({
  name,
  born,
  hometown,
  p1,
  p2,
  id,
  key,
  profileImageUrl,
}) => (
  <div key={key}>
    <li className="list-group-item">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={name}
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="post-area">
        {/* <Link to="/">{name} </Link> */}
        <h1>{name}</h1>
        <span className="text-muted">{born}</span>
        <p>{hometown}</p>
        <p>{}</p>
        <p>{}</p>
      </div>
    </li>
  </div>
);

export default Relation;
