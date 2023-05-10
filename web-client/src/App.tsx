import { RouterProvider } from "react-router-dom";

import router from "./router";
import ModalFormContact from "./components/ModalFormContact";
import "./i18n";
import "./App.scss";
import "./scss/full.scss";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <RouterProvider router={router} />
      <ModalFormContact />
    </div>
  );
}

export default App;
