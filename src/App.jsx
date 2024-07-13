import Headers from "./Components/Headers";
import SideBar from "./Components/SideBar";
import "./index.css";
import Channel from "./screens/Channel";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import WatchScreen from "./screens/WatchScreen";



const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      <SideBar />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && !loading) {
      navigate("/login", { replace: false });
    }
  }, [accessToken, loading]);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
        path="/channel/:id"
        exact
        element={
          <Layout>
            <Channel />
          </Layout>
        }
      />
       <Route
        path="/watch/:id"
        exact
        element={
          <Layout>
            <WatchScreen/>
          </Layout>
        }
      />
      <Route path="/login" element={<LoginScreen />} />
      <Route
        path="*"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
    </Routes>
  );
}

App.propTypes = {
  children: PropTypes.any,
};

export default App;
