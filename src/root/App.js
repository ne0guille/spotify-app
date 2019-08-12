import React from "react";
import { withRouter } from "react-router";

import AppRoutes from "./Routes";
import ConnectedAudioPlayer from "../screens/Tracks/Container";

import "antd/dist/antd.css";
import "../index.css";

const Routes = (props) => <AppRoutes {...props} />;
const ConnectedAppRoutes = withRouter(Routes);

function App() {
  return (
    <main className="App">
      <ConnectedAppRoutes />
      <footer>
        <ConnectedAudioPlayer />
      </footer>
    </main>
  );
}

export default App;
