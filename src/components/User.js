import React from "react";
const User = ({userProps}) => {
  return (
    <div className="user-container">
      <div className="user">
        <h3>{userProps[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : {userProps[0].age}</p>
        <p>Like(s) : {userProps[0].likes}</p>
      </div>
    </div>
  );
};

export default User;