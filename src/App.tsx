import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/index";
import { useSkillRecords, useProjectRecords } from "./hooks/use-firestore";

function App() {
  const skillsData = useSkillRecords();
  const projectsData = useProjectRecords();

  return (
    <Routes>
      <Route
        element={
          <IndexPage skillsData={skillsData} projectsData={projectsData} />
        }
        path="/"
      />
    </Routes>
  );
}

export default App;
