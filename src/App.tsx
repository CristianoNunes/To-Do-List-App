import React from "react";
import TaskPage from "./pages/TaskPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TaskPage />
    </div>
  );
};

export default App;
