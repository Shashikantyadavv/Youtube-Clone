import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalState from "./context/context.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
import { BrowserRouter } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </GlobalState>
);
