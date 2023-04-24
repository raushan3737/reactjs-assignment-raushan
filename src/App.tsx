import React from "react";
import CandidateTable from "./components/organisms/StateManagementAssignment";
import SignIn from "./components/organisms/ParentChildAssignment/SignInCard";
import UsersList from "./components/organisms/AxiosAssignment/UsersList";
import AddUserForm from "./components/organisms/AxiosAssignment/AddUserForm";

const App = () => {
  return (
    <div className="App">
      {/* <h1>Welcome to the React App</h1> */}
      {/* Parent Child Relationship Assignment: SignIn Card  */}
      {/* <SignIn /> */}
      {/* State Management Assignment: SignIn Card  */}
      {/* <CandidateTable /> */}
      {/* Axios assignment */}
      <AddUserForm />
      <UsersList />
    </div>
  );
};

export default App;
