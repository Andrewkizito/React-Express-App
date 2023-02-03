//Importing core components
import { Route, Routes } from "react-router-dom";
import Layout from "./components/core/Layout";
import routes from "./utils/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={<Layout>{item.component}</Layout>} />
        ))}
      </Routes>
    </>
  );
}

export default App;
