import React from "react";
import styled from "styled-components";

const UserCard = ({ user, className }) => {
  return (
    <div className={className}>
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

const StyledUserCard = styled(UserCard)`
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px 5px;
  padding: 5px 5px;
`;

export default StyledUserCard;
