import React from "react";
import DashboardPage from "./presentation/pages/DashboardPage";
import AuthenticationPage from "./presentation/pages/AuthenticationPage";

function App() {
  if (true) {
    return <AuthenticationPage />
  } else {
    return <DashboardPage />
  }
}

export default App