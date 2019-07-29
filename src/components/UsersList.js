import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchUsers } from "../actions/usersAction";
import LoadingSpinner from "./LoadingSpinner";
import UserCard from "./UserCard";
import ErrorDisplay from "./ErrorDisplay";

const UsersList = ({ fetchUsers, users, className }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const renderContent = users.loading ? (
    <LoadingSpinner />
  ) : users.error ? (
    <ErrorDisplay>404</ErrorDisplay>
  ) : (
    users.users.map(user => <UserCard user={user} />)
  );
  return <div className={className}>{renderContent}</div>;
};

const mapStateToProps = state => ({ users: state.users });

const StyledUserList = styled(UsersList)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default connect(
  mapStateToProps,
  { fetchUsers }
)(StyledUserList);
