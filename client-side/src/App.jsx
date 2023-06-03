import { RouterProvider } from "react-router-dom";
import routers from "./routers";

import { Provider } from "react-redux";
import store from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routers} />;
    </Provider>
  );
}

export default App;
