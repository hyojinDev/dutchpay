import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateGroup from "@components/create-group/CreateGroup";
import AddMembers from "@components/add-members/AddMembers";
import ExpenseMain from "@components/expense-main/ExpenseMain";
import { PATH } from "@routes/path";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.CREATE_GROUP} />} />
        <Route path={PATH.CREATE_GROUP} element={<CreateGroup />} />
        <Route path={PATH.ADD_MEMBERS} element={<AddMembers />} />
        <Route path={PATH.EXPENSE_MAIN} element={<ExpenseMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
