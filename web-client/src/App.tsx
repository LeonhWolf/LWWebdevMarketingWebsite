import { RouterProvider } from "react-router-dom";

import router from "./router";
import "./i18n";
import "./App.scss";
import "./scss/full.scss";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
