//Importing helper modules
import { AppRoute } from "./utils/types";

//Importing core components
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/core/Layout";
import routes from "./utils/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((item: AppRoute, i) => {
          if (!item.nested)
            return (
              <Route
                key={i}
                path={item.path}
                element={<Layout>{item.component}</Layout>}
              />
            );
          else
            return (
              <Route path={item.path} element={item.component} key={i}>
                {item.nested.map((item: any, i) => (
                  <Route key={i} path={item.path} element={item.component} />
                ))}
              </Route>
            );
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
