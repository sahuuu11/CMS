import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./create/CreatePage";
import LoginForm from "./login/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/createPage" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
