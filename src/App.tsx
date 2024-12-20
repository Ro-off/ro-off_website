import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/index";
import { useSkillRecords } from "./hooks/use-firestore";

function App() {
  const skillsData = useSkillRecords();
  return (
    <Routes>
      <Route element={<IndexPage skillsData={skillsData} />} path="/" />
    </Routes>
  );
}

export default App;
